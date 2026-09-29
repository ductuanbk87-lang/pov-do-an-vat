const requiredEnvironmentVariables = [
  'APP_URL',
  'PAYOS_CLIENT_ID',
  'PAYOS_API_KEY',
  'PAYOS_CHECKSUM_KEY',
  'SUPABASE_URL',
  'SUPABASE_SECRET_KEY',
] as const;

type RequiredEnvironmentVariable = (typeof requiredEnvironmentVariables)[number];

export const PRODUCT = {
  name: 'Chatbot Video AI POV Do An Vat #VATC',
  price: 99_000,
  currency: 'VND',
  paymentLinkLifetimeSeconds: 30 * 60,
} as const;

export function getEnvironmentVariable(name: RequiredEnvironmentVariable): string {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export function getAppUrl(): string {
  const value = getEnvironmentVariable('APP_URL').replace(/\/$/, '');
  const url = new URL(value);

  if (url.protocol !== 'https:' && url.hostname !== 'localhost') {
    throw new Error('APP_URL must use HTTPS in production.');
  }

  return url.toString().replace(/\/$/, '');
}
