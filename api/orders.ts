import { randomInt } from 'node:crypto';
import { getPayOS, getSupabaseAdmin } from '../server/clients';
import { getAppUrl, PRODUCT } from '../server/config';
import { jsonResponse, methodNotAllowed } from '../server/http';

type CreateOrderBody = {
  fullName?: unknown;
  phone?: unknown;
  email?: unknown;
};

const MAX_BODY_SIZE = 8_192;

function cleanText(value: unknown, maxLength: number): string {
  return typeof value === 'string' ? value.trim().replace(/\s+/g, ' ').slice(0, maxLength) : '';
}

function cleanPhone(value: unknown): string {
  return typeof value === 'string' ? value.replace(/\D/g, '').slice(0, 11) : '';
}

function cleanEmail(value: unknown): string {
  return typeof value === 'string' ? value.trim().toLowerCase().slice(0, 254) : '';
}

function createOrderCode(): number {
  return Date.now() * 100 + randomInt(0, 100);
}

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method !== 'POST') {
      return methodNotAllowed(['POST']);
    }

    const contentLength = Number(request.headers.get('content-length') ?? '0');
    if (contentLength > MAX_BODY_SIZE) {
      return jsonResponse({ error: 'Du lieu gui len qua lon.' }, 413);
    }

    let body: CreateOrderBody;
    try {
      body = (await request.json()) as CreateOrderBody;
    } catch {
      return jsonResponse({ error: 'Du lieu khong hop le.' }, 400);
    }

    const fullName = cleanText(body.fullName, 100);
    const phone = cleanPhone(body.phone);
    const email = cleanEmail(body.email);

    if (fullName.length < 2) {
      return jsonResponse({ error: 'Vui long nhap ho va ten.' }, 400);
    }

    if (!/^0\d{8,10}$/.test(phone)) {
      return jsonResponse({ error: 'So dien thoai khong hop le.' }, 400);
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse({ error: 'Email khong hop le.' }, 400);
    }

    const supabase = getSupabaseAdmin();
    const expiresAt = new Date(Date.now() + PRODUCT.paymentLinkLifetimeSeconds * 1_000);
    const recentWindow = new Date(Date.now() - 10 * 60 * 1_000).toISOString();
    const { count: recentOrderCount, error: rateLimitError } = await supabase
      .from('orders')
      .select('id', { count: 'exact', head: true })
      .eq('phone', phone)
      .gte('created_at', recentWindow);

    if (rateLimitError) {
      console.error('Could not check order rate limit:', rateLimitError.code ?? 'unknown');
      return jsonResponse({ error: 'Khong the tao don hang. Vui long thu lai.' }, 500);
    }

    if ((recentOrderCount ?? 0) >= 3) {
      return jsonResponse({ error: 'Ban da tao qua nhieu don. Vui long thu lai sau 10 phut.' }, 429);
    }

    let order:
      | {
          id: string;
          public_id: string;
          order_code: number;
        }
      | undefined;

    for (let attempt = 0; attempt < 3 && !order; attempt += 1) {
      const orderCode = createOrderCode();
      const { data, error } = await supabase
        .from('orders')
        .insert({
          order_code: orderCode,
          full_name: fullName,
          phone,
          email: email || null,
          amount: PRODUCT.price,
          status: 'PENDING',
          expires_at: expiresAt.toISOString(),
        })
        .select('id, public_id, order_code')
        .single();

      if (!error && data) {
        order = data as typeof order;
        break;
      }

      if (error?.code !== '23505') {
        console.error('Could not create order record:', error?.code ?? 'unknown');
        return jsonResponse({ error: 'Khong the tao don hang. Vui long thu lai.' }, 500);
      }
    }

    if (!order) {
      return jsonResponse({ error: 'Khong the tao ma don hang. Vui long thu lai.' }, 500);
    }

    const appUrl = getAppUrl();
    const resultUrl = `${appUrl}/?orderId=${encodeURIComponent(order.public_id)}`;
    const description = `VATC${String(order.order_code).slice(-5)}`;

    try {
      const paymentLink = await getPayOS().paymentRequests.create({
        orderCode: order.order_code,
        amount: PRODUCT.price,
        description,
        buyerName: fullName,
        buyerPhone: phone,
        buyerEmail: email || undefined,
        items: [
          {
            name: PRODUCT.name,
            quantity: 1,
            price: PRODUCT.price,
          },
        ],
        expiredAt: Math.floor(expiresAt.getTime() / 1_000),
        cancelUrl: `${resultUrl}&payment=cancelled#order-section`,
        returnUrl: `${resultUrl}&payment=returned#order-section`,
      });

      const { error: updateError } = await supabase
        .from('orders')
        .update({
          payment_link_id: paymentLink.paymentLinkId,
          checkout_url: paymentLink.checkoutUrl,
        })
        .eq('id', order.id);

      if (updateError) {
        console.error('Could not attach payment link to order:', updateError.code ?? 'unknown');
        await getPayOS().paymentRequests.cancel(paymentLink.paymentLinkId, 'Could not save order').catch(() => undefined);
        return jsonResponse({ error: 'Khong the hoan tat don hang. Vui long thu lai.' }, 500);
      }

      return jsonResponse({
        orderId: order.public_id,
        checkoutUrl: paymentLink.checkoutUrl,
        expiresAt: expiresAt.toISOString(),
      });
    } catch (error) {
      console.error('payOS create payment link failed:', error instanceof Error ? error.name : 'unknown');
      await supabase.from('orders').update({ status: 'FAILED' }).eq('id', order.id);
      return jsonResponse({ error: 'payOS chua tao duoc link thanh toan. Vui long thu lai.' }, 502);
    }
  },
};
