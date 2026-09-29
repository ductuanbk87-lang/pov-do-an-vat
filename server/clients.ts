import { PayOS } from '@payos/node';
import { createClient } from '@supabase/supabase-js';
import { getEnvironmentVariable } from './config';
import type { Database } from './database.types';

let payOSClient: PayOS | undefined;

export function getPayOS(): PayOS {
  payOSClient ??= new PayOS({
    clientId: getEnvironmentVariable('PAYOS_CLIENT_ID'),
    apiKey: getEnvironmentVariable('PAYOS_API_KEY'),
    checksumKey: getEnvironmentVariable('PAYOS_CHECKSUM_KEY'),
    timeout: 15_000,
    maxRetries: 2,
  });

  return payOSClient;
}

let supabaseAdmin: ReturnType<typeof createClient<Database>> | undefined;

export function getSupabaseAdmin(): ReturnType<typeof createClient<Database>> {
  supabaseAdmin ??= createClient<Database>(
    getEnvironmentVariable('SUPABASE_URL'),
    getEnvironmentVariable('SUPABASE_SECRET_KEY'),
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    },
  );

  return supabaseAdmin;
}
