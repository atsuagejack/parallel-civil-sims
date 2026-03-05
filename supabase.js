import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = "https://khfhzsrzyzyojacdvrfe.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoZmh6c3J6eXp5b2phY2R2cmZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3MzgxNjYsImV4cCI6MjA4ODMxNDE2Nn0.ZBrIyT2Tv8dyzkBe9xyhnXB7EIW23-bQQRbS8YlzPag"

export const supabase = createClient(
SUPABASE_URL,
SUPABASE_KEY
)
