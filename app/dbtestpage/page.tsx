import { createClient } from "@/utils/supabase/server";

export default async function Locations() {
  const supabase = await createClient();
  const { data: locations } = await supabase.from("location").select();

  return <pre>{JSON.stringify(locations, null, 2)}</pre>;
}
