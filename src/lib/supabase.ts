import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          full_name: string;
          school_level: string;
          created_at: string;
          is_admin: boolean;
        };
        Insert: {
          id?: string;
          email: string;
          full_name: string;
          school_level: string;
          created_at?: string;
          is_admin?: boolean;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string;
          school_level?: string;
          created_at?: string;
          is_admin?: boolean;
        };
      };
      user_progress: {
        Row: {
          id: string;
          user_id: string;
          level_id: string;
          topic_id: number;
          completed: boolean;
          progress: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          level_id: string;
          topic_id: number;
          completed?: boolean;
          progress?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          level_id?: string;
          topic_id?: number;
          completed?: boolean;
          progress?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      user_notes: {
        Row: {
          id: string;
          user_id: string;
          level_id: string;
          topic_id: number;
          notes: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          level_id: string;
          topic_id: number;
          notes: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          level_id?: string;
          topic_id?: number;
          notes?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      game_scores: {
        Row: {
          id: string;
          user_id: string;
          game_id: string;
          score: number;
          level: number;
          completed_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          game_id: string;
          score: number;
          level?: number;
          completed_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          game_id?: string;
          score?: number;
          level?: number;
          completed_at?: string;
        };
      };
    };
  };
};