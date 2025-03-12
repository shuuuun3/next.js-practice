import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
    "https://uzasqtflhsnhlqqfcqen.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6YXNxdGZsaHNuaGxxcWZjcWVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2ODIxNjMsImV4cCI6MjA1NzI1ODE2M30.TvOywPrwGqZB5i5mRqXqc2RB4V7PGVZN10ZR7KQp56k"
)

export default supabase