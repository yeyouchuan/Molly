export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      card_types: {
        Row: {
          description: string;
          type: string;
        };
        Insert: {
          description?: string;
          type: string;
        };
        Update: {
          description?: string;
          type?: string;
        };
      };
      cards: {
        Row: {
          created_at: string;
          id: string;
          large: boolean;
          properties: Json;
          type: string;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          large?: boolean;
          properties: Json;
          type: string;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          large?: boolean;
          properties?: Json;
          type?: string;
          updated_at?: string;
        };
      };
      featured: {
        Row: {
          card_id: string;
          ordering: number;
        };
        Insert: {
          card_id: string;
          ordering: number;
        };
        Update: {
          card_id?: string;
          ordering?: number;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
