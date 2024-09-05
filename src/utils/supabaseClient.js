import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lzypndoeosveqgymwaxe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6eXBuZG9lb3N2ZXFneW13YXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMyOTEzNDYsImV4cCI6MjAzODg2NzM0Nn0.qYgLl3SSbol_MftQTe3IquNdx3skXlCTf8pdHPxIAdM";

export const supabase = createClient(supabaseUrl, supabaseKey);
