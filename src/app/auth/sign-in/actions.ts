'use server';

import { getZodErros } from "@/helpers/zod";

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
        name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
        email: z.string().email({ message: "Invalid email address" }),
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
    if (!validation.isValid) {
        return { ...prevState, ...validation };
    }

    const data = {
        email: formData.get("email")?.toString() || "",
        password: formData.get("password")?.toString() || "",
    };

    console.log("ALL GOOD", data)
    return { isValid: true, errors: {} };
  
};
