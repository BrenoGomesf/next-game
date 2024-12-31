"use client";

import { SubmitButton, TextInput } from "@/components";
import { useFormState } from "react-dom";
import { handleSignUpForm } from "./actions";

export default function SignUpForm() {
  const [states, formAction] = useFormState(handleSignUpForm, {});

  return (
    <form action={formAction}>
      <TextInput name="name" label={"Name"} />
      <TextInput name="email" label={"E-mail"} inputMode="email"/>
      <TextInput name="password" label={"Password"} type="password" />
      <TextInput name="passwordConfirmation" label={"Password confirmation"} type="password"/>
      <SubmitButton label="Create Account" />
    </form>
  );
}
