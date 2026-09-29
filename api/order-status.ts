import { getSupabaseAdmin } from '../server/clients.js';
import { jsonResponse, isUuid, methodNotAllowed } from '../server/http.js';

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method !== 'GET') {
      return methodNotAllowed(['GET']);
    }

    const orderId = new URL(request.url).searchParams.get('orderId')?.trim() ?? '';
    if (!isUuid(orderId)) {
      return jsonResponse({ error: 'Ma don hang khong hop le.' }, 400);
    }

    const { data, error } = await getSupabaseAdmin()
      .from('orders')
      .select('status, amount, paid_at, expires_at')
      .eq('public_id', orderId)
      .maybeSingle();

    if (error) {
      console.error('Could not read order status:', error.code ?? 'unknown');
      return jsonResponse({ error: 'Khong the kiem tra don hang.' }, 500);
    }

    if (!data) {
      return jsonResponse({ error: 'Khong tim thay don hang.' }, 404);
    }

    return jsonResponse({
      status: data.status,
      amount: data.amount,
      paidAt: data.paid_at,
      expiresAt: data.expires_at,
    });
  },
};
