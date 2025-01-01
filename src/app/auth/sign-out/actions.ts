 "use server";

import { logout } from "@/helpers/session";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


 export const handleSignOutForm = async () => {
        await logout();
        revalidatePath('/');
        return redirect('/')
 }