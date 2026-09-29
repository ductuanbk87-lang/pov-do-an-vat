export type OrderStatus = 'PENDING' | 'PAID' | 'CANCELLED' | 'FAILED' | 'REVIEW';

export type Database = {
  public: {
    Tables: {
      orders: {
        Row: {
          id: string;
          public_id: string;
          order_code: number;
          full_name: string;
          phone: string;
          email: string | null;
          amount: number;
          status: OrderStatus;
          payment_link_id: string | null;
          checkout_url: string | null;
          transaction_reference: string | null;
          paid_at: string | null;
          expires_at: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          public_id?: string;
          order_code: number;
          full_name: string;
          phone: string;
          email?: string | null;
          amount: number;
          status?: OrderStatus;
          payment_link_id?: string | null;
          checkout_url?: string | null;
          transaction_reference?: string | null;
          paid_at?: string | null;
          expires_at: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          public_id?: string;
          order_code?: number;
          full_name?: string;
          phone?: string;
          email?: string | null;
          amount?: number;
          status?: OrderStatus;
          payment_link_id?: string | null;
          checkout_url?: string | null;
          transaction_reference?: string | null;
          paid_at?: string | null;
          expires_at?: string;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
