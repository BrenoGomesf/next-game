"use client";

import { SubmitButton, TextInput } from "@/components";
import { useFormState } from "react-dom";
import { handleSignInForm, SignInStates } from "./actions";

const initialStates: SignInStates = {
  isValid: null,
  errors: {
    email: null,
    password: null,
  },
};

export default function SignInForm() {
  const [states, formAction] = useFormState(handleSignInForm, initialStates);

  return (
    <form action={formAction} noValidate>
      <TextInput
        name="email"
        label="E-mail"
        inputMode="email"
        error={states?.errors?.email} 
      />
      <TextInput
        name="password"
        label="Password"
        type="password"
        error={states?.errors?.password}
      />
      <SubmitButton label="Log in" />
    </form>
  );
}
