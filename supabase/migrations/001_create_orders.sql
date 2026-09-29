create extension if not exists pgcrypto;

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  public_id uuid not null unique default gen_random_uuid(),
  order_code bigint not null unique,
  full_name text not null check (char_length(full_name) between 2 and 100),
  phone text not null check (phone ~ '^0[0-9]{8,10}$'),
  email text,
  amount integer not null check (amount > 0),
  status text not null default 'PENDING'
    check (status in ('PENDING', 'PAID', 'CANCELLED', 'FAILED', 'REVIEW')),
  payment_link_id text unique,
  checkout_url text,
  transaction_reference text unique,
  paid_at timestamptz,
  expires_at timestamptz not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists orders_status_created_at_idx
  on public.orders (status, created_at desc);

create index if not exists orders_phone_created_at_idx
  on public.orders (phone, created_at desc);

alter table public.orders enable row level security;
revoke all on table public.orders from anon, authenticated;

create or replace function public.set_orders_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists orders_set_updated_at on public.orders;
create trigger orders_set_updated_at
before update on public.orders
for each row execute function public.set_orders_updated_at();
