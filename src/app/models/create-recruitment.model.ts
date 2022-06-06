import { SignUp } from "./signup.model"

export class RequiredSkills{
    skill_name!: string
}

export class Expert{
    id!: string;
    name!: string;
    username!: string;
    email!: string;
    role!: string;
    skills!: RequiredSkills;
}

export class Recruitment{
    id!: number;
    name!: string;
    category!: string;
    start_date!: Date;
    end_date!: Date;
    skills!: RequiredSkills[];
    expert!: Expert 
}

export class CreateRecruitmentInput{
    name!: string;
    category!: string;
    start_date!: Date;
    end_date!: Date;
    // resume= models.FileField(blank=False, null=True)
    resume!: File;
    expert!: string;
    skills!: string;
    created_by!: string;
}

export class AllExperts{
    id!: number;
    name!: string;
    skills!: [] | null;
}