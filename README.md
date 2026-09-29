# Chatbot Video AI POV Do An Vat #VATC

Vite + React landing page with a server-side payOS checkout, signed webhook verification, and Supabase order storage.

## Security model

- The browser never receives the payOS API key, checksum key, or Supabase service-role key.
- The product price is fixed on the server at 268,000 VND.
- payOS webhook signatures are verified with the official `@payos/node` SDK.
- An order is marked paid only when its order code, amount, currency, and transaction data match.
- Transaction references are unique so webhook retries cannot fulfill an order twice.
- The public order-status endpoint uses an unguessable UUID and returns no buyer details.
- Supabase Row Level Security is enabled and client roles receive no table permissions.

## 1. Create the Supabase database

1. Create a Supabase project.
2. Open **SQL Editor**.
3. Run the complete contents of `supabase/migrations/001_create_orders.sql`.
4. Open **Project Settings > API** and locate:
   - Project URL
   - Secret key (`sb_secret_...`)

The secret key is server-only. Never put it in a `VITE_` environment variable or expose it in a screenshot.

## 2. Add Vercel environment variables

In **Vercel > Project > Settings > Environment Variables**, add:

```text
APP_URL=https://povdoanvat.vercel.app
PAYOS_CLIENT_ID=...
PAYOS_API_KEY=...
PAYOS_CHECKSUM_KEY=...
SUPABASE_URL=...
SUPABASE_SECRET_KEY=sb_secret_...
```

Apply them to Production, Preview, and Development as appropriate. Real secret values must not be committed to Git.

## 3. Deploy before registering the webhook

Deploy the project to Vercel, then verify that these routes respond:

```text
POST /api/orders
GET  /api/order-status?orderId=<uuid>
POST /api/webhooks/payos
```

The webhook URL is:

```text
https://povdoanvat.vercel.app/api/webhooks/payos
```

Add that URL to the active payOS payment channel only after the deployment and database migration are ready. payOS sends a signed sample event while validating the URL; the endpoint deliberately acknowledges a valid sample whose order code does not exist.

## 4. Test safely

payOS does not provide a separate sandbox. Before launch:

1. Use a temporary server-side test price or a private test product with a small real amount.
2. Create an order from the website.
3. Complete the VietQR payment on payOS.
4. Confirm the order changes from `PENDING` to `PAID` in Supabase.
5. Confirm repeated webhook delivery does not create a second fulfillment.
6. Restore the production price to 268,000 VND and redeploy.

Do not change the amount from the browser during testing; the server must remain the source of truth.

## Local checks

Requires Node.js 22 or newer.

```bash
npm install
npm run lint
npm run build
```

The Vite development server serves only the frontend. Use Vercel's local development tooling if you need the `/api` functions locally.

## Current delivery behavior

Payment confirmation is automatic. Product delivery is intentionally still manual through Zalo/email. Automating delivery should be a separate step using a private signed download or an authenticated customer account; do not place the paid product at a public static URL.
