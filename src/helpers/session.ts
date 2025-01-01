import { cookies } from "next/headers";
import { decrypt, encrypt } from "./jwt";

const SESSION_NAME = 'session'
const generateExpires = () => {
   const expires = new Date(Date.now() + 60 * 60 *  1000)
   return expires
}
export const createSession = async (payload: string) => {
   const expires = generateExpires()
   await (await cookies()).set(SESSION_NAME, payload, {expires, httpOnly: true});
}

export const getSession = async () => {
    const session = await (await cookies()).get(SESSION_NAME)?.value;
    if(!session) return null;
    return await decrypt(session);

 }

 export const updateSession = async () => {
   const session = await getSession();
   if (!session) return null;
 
   const expires = generateExpires();
   const jwt = await encrypt({ ...session, expires });
 
   return {
     name: SESSION_NAME,
     value: jwt,
     expires,
     httpOnly: true,
   };
 };
 export const logout = async () => {
   //destroy session
   await (await cookies()).set(SESSION_NAME, "", {expires: new Date(0)});
 }