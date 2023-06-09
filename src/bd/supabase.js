import { createClient } from '@supabase/supabase-js'
//Creando la conexión con supabase
const supabaseUrl = 'https://nmeyrmuovklmtgauwuit.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tZXlybXVvdmtsbXRnYXV3dWl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxNzY2MTAsImV4cCI6MTk5Mjc1MjYxMH0.CwL5drSkx6CZXaD_maZAaWlziAcS0cVsmf4nbU6fD2c'

//exportamos la conexión
export const supabase = createClient(supabaseUrl, supabaseKey)
