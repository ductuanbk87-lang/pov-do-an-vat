import type { Webhook } from '@payos/node';
import { getPayOS, getSupabaseAdmin } from '../../server/clients';
import { PRODUCT } from '../../server/config';
import { jsonResponse, methodNotAllowed } from '../../server/http';

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method !== 'POST') {
      return methodNotAllowed(['POST']);
    }

    let payload: Webhook;
    try {
      payload = (await request.json()) as Webhook;
    } catch {
      return jsonResponse({ error: 'Invalid JSON.' }, 400);
    }

    let webhookData;
    try {
      webhookData = await getPayOS().webhooks.verify(payload);
    } catch (error) {
      console.warn('Rejected invalid payOS webhook:', error instanceof Error ? error.name : 'unknown');
      return jsonResponse({ error: 'Invalid signature.' }, 400);
    }

    const supabase = getSupabaseAdmin();
    const { data: order, error: findError } = await supabase
      .from('orders')
      .select('id, status, amount, transaction_reference')
      .eq('order_code', webhookData.orderCode)
      .maybeSingle();

    if (findError) {
      console.error('Could not look up webhook order:', findError.code ?? 'unknown');
      return jsonResponse({ error: 'Database temporarily unavailable.' }, 500);
    }

    // payOS sends a signed sample payload while validating a webhook URL.
    if (!order) {
      return jsonResponse({ ok: true, ignored: true });
    }

    if (order.status === 'PAID') {
      return jsonResponse({ ok: true, duplicate: true });
    }

    const isValidPayment =
      webhookData.code === '00' &&
      webhookData.currency === PRODUCT.currency &&
      webhookData.amount === PRODUCT.price &&
      order.amount === PRODUCT.price;

    if (!isValidPayment) {
      const { error: reviewError } = await supabase
        .from('orders')
        .update({ status: 'REVIEW' })
        .eq('id', order.id)
        .neq('status', 'PAID');

      if (reviewError) {
        return jsonResponse({ error: 'Could not flag payment for review.' }, 500);
      }

      return jsonResponse({ ok: true, review: true });
    }

    const { error: updateError } = await supabase
      .from('orders')
      .update({
        status: 'PAID',
        transaction_reference: webhookData.reference,
        paid_at: new Date().toISOString(),
      })
      .eq('id', order.id)
      .neq('status', 'PAID');

    if (updateError) {
      // Returning 500 asks payOS to retry. The unique transaction reference
      // prevents a retry from fulfilling the same payment twice.
      console.error('Could not mark order paid:', updateError.code ?? 'unknown');
      return jsonResponse({ error: 'Could not update payment.' }, 500);
    }

    return jsonResponse({ ok: true });
  },
};
