
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default async function useSession() {

    const supabase = createClient();
    const router = useRouter();

    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.error("Error getting session", error);
    }
    if (!data.session) {
        router.push("/login");
        return;
    }

}