
export class SignUp{
    name!: string;
    username!: string;
    email!: string;
    password!: string;
    role!: string;
    skills!: any;
}



export class Login{
    email!: string;
    password!: string;
}

export class LoginOutput{
    id!: string;
    name!: string;
    username!: string;
    email!: string
}

export class ForgotPass{
    email!: string;
    password!: string;
}

export class OutputData{
    message!: string;
}

export class InputTextData{
    sentence!: string
}