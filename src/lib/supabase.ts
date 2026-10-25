import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://npjftlviicnodszgfnth.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wamZ0bHZpaWNub2RzemdmbnRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1NjQ0NjYsImV4cCI6MjA3NzE0MDQ2Nn0.z0bNJgM3HC-t-LrZ6iB-XFAMpQu8-FpcJ4CO-qgpLSA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
