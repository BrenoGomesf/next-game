'use server';

import { encrypt } from "@/helpers/jwt";
import { createSession } from "@/helpers/session";
import { getZodErros } from "@/helpers/zod";
import UsersService from "@/services/Users";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { z, ZodError } from "zod";

export type SignInError = {
    email: string | null;
    password: string | null;
};

export type SignInStates = {
    isValid: true |false | null;
    errors: SignInError | {};  
};

const validateSignUpForm = (formData: FormData): SignInStates => {
    const userSchema = z.object({
        email: z.string().email({ message: "Invalid email address" }),
        password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    });

    try {
        userSchema.parse(Object.fromEntries(formData));

        return { isValid: true, errors: { } };
    } catch (error) {
      const ZodErrors = getZodErros(error) ;
      return {
        isValid: false,
        errors: ZodErrors 
    };
    }
};

export const handleSignInForm = async (prevState: SignInStates, formData: FormData): Promise<SignInStates> => {
    const validation = validateSignUpForm(formData);
    console.log("form",formData)
    console.log("prev",prevState)
    console.log("isValid",validation)
    if (!validation.isValid) {
        return { ...prevState, ...validation };
    }

    const data = {
        email: formData.get("email")?.toString() || "",
        password: formData.get("password")?.toString() || "",
    };

    const user = await UsersService.sigin(data);

    if(!user) return { isValid: false, errors: {} };

    const payload = {
        uuid: user.uuid,
        name: user.name,
        email: user.email
    }
    const jwt = await  encrypt(payload)
    await createSession(jwt);
    revalidatePath('/');
    return redirect('/')
  
};
