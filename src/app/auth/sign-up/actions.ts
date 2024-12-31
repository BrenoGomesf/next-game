'use server';

import UsersService from "@/services/Users";

export const handleSignUpForm = async (prevState: any, formData: FormData) => {
    
    const data = {
        name: formData.get('name') as String,
        email: formData.get('email') as String,
        password: formData.get('password') as String,
    }
    const record = await UsersService.signUp(data);
    console.log("records=",record)
    return{}
}