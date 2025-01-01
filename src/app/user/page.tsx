import { PageWrapper } from "@/components";
import { getSession } from "@/helpers/session";
import { redirect } from "next/navigation";

const User = async () => {
      const user = await getSession();

      if(!user)redirect('/auth/sign-in')
    return(<PageWrapper>
           <div className="container mx-auto my-12">
              <div className="w-2/3">
                <h2 className="text-3xl my-6">Account</h2>
                <div className="flex-col">
                  {user?.name ? <p className="my-2">{String(user?.name)}</p> : null }
                  {user?.email ? <p className="my-2">{String(user?.email)}</p> : null }
                </div>
              </div>
            </div>
        </PageWrapper>)
}
export default User;