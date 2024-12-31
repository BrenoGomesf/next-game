import { ZodError } from "zod";

export const getZodErros = (error: unknown) => {
    const isZodError = error instanceof ZodError;
    if(!isZodError) return {};

    const {fieldErrors} = error.flatten();
    const erros = Object.keys(fieldErrors).reduce((acc, key) => {
        const message = fieldErrors[key]?.at(0);
        return { ...acc, [key]: message}
    }, {})

    return erros
}