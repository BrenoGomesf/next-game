"use client";

import { SubmitButton, TextInput } from "@/components";
import { useFormState } from "react-dom";
import { handleSignUpForm, type SignUpStates } from "./actions";

const initialStates: SignUpStates = {
  isValid: null,
  errors: {
    name: null,
    email: null,
    password: null,
    passwordConfirmation: null,
  },
};

export default function SignUpForm() {
  const [states, formAction] = useFormState(handleSignUpForm, initialStates);



  return (
    <form action={formAction} noValidate>
      <TextInput
        name="name"
        label="Name"
        error={states?.errors.name}
      />
      <TextInput
        name="email"
        label="E-mail"
        inputMode="email"
        error={states?.errors.email}
      />
      <TextInput
        name="password"
        label="Password"
        type="password"
        error={states?.errors.password}
      />
      <TextInput
        name="passwordConfirmation"
        label="Password Confirmation"
        type="password"
        error={states?.errors.passwordConfirmation}
      />
      <SubmitButton label="Create Account" />
    </form>
  );
}
