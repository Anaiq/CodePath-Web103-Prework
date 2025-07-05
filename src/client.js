import { createClient } from "@supabase/supabase-js";

const URL = "https://amhmnzqfsdteputhqxxe.supabase.co";
const supabase_API_KEY = import.meta.env.VITE_SUPABASE_API_KEY;

export const supabase = createClient(URL, supabase_API_KEY);
