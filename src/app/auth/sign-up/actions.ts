'use server';

import UsersService from "@/services/Users";
import { redirect } from "next/navigation";
import { z, ZodError } from "zod";

export type SignUpError = {
    name: string | null;
    email: string | null;
    password: string | null;
    passwordConfirmation: string | null;
    general?: string | null; 
};

export type SignUpStates = {
    isValid: boolean | null;
    errors: SignUpError;
};

const validateSignUpForm = (formData: FormData): SignUpStates => {
    const userSchema = z.object({
        name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
        email: z.string().email({ message: "Invalid email address" }),
        password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
        passwordConfirmation: z
            .string()
            .min(6)
            .refine(
                (val) => val === formData.get("password")?.toString(),
                { message: "Passwords do not match" }
            ),
    });

    try {
        userSchema.parse(Object.fromEntries(formData));
        return { isValid: true, errors: { name: null, email: null, password: null, passwordConfirmation: null } };
    } catch (error) {
        if (error instanceof ZodError) {
            const fieldErrors = error.flatten().fieldErrors;
            const errors: SignUpError = {
                name: fieldErrors.name?.[0] || null,
                email: fieldErrors.email?.[0] || null,
                password: fieldErrors.password?.[0] || null,
                passwordConfirmation: fieldErrors.passwordConfirmation?.[0] || null,
            };
            return { isValid: false, errors };
        }
        console.error("Unexpected validation error:", error);
        return {
            isValid: false,
            errors: {
                name: null,
                email: null,
                password: null,
                passwordConfirmation: null,
                general: "An unexpected error occurred during validation.",
            },
        };
    }
};

export const handleSignUpForm = async (prevState: SignUpStates, formData: FormData): Promise<SignUpStates> => {
    const validation = validateSignUpForm(formData);

    if (!validation.isValid) {
        return { ...prevState, ...validation };
    }

    const data = {
        name: formData.get("name")?.toString() || "",
        email: formData.get("email")?.toString() || "",
        password: formData.get("password")?.toString() || "",
    };

    try {
        const record = await UsersService.signUp(data);
        redirect('/');
        return {  isValid: true, errors: { name: null, email: null, password: null, passwordConfirmation: null } };
    } catch (error) {
        return {
            ...prevState,
            isValid: false,
            errors: {
                ...validation.errors,
                general: "Sign-up failed. Please try again.",
            },
        };
    }
};
