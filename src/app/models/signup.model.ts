import { Role } from "./roles.module";

export class SignUp{
    name!: string;
    username!: string;
    email!: string;
    password!: string;
    role!: string;
    skills!: any;
}

export class SignUpOutput{
    id!: string;
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
    role!: Role | string;
}

export class ForgotPass{
    email!: string;
    password!: string;
}

export class Output{
    message!: string;
}