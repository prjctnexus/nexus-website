import { createClient } from "@supabase/supabase-js";

type SupabaseConfig = {
    supabaseURL: string;
    supabaseKey: string;
}

const supabaseConfig: SupabaseConfig = {
    supabaseURL: "https://hsqxpiqllcgfpsvdppit.supabase.co",
    supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzcXhwaXFsbGNnZnBzdmRwcGl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyMTE4MTksImV4cCI6MjA1OTc4NzgxOX0.xN2ouFXJPhdkaj-ddGSrrxmn4QgysW6NY7qo6Lsye7g"
} satisfies SupabaseConfig;

export const supabaseClient = createClient(
    supabaseConfig.supabaseURL, supabaseConfig.supabaseKey
)