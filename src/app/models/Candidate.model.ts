export class UnderProcessCandidates{
    id!: string;
    candidate_name!: string;
    candidate_email!: string;
    candidate_phone!: string;
    quizEligibility!: string;
}

export class CompletedProcessCandidates{
    id!: string;
    candidate_name!: string;
    candidate_email!: string;
    candidate_phone!: string;
    score!: string;
    status!: string;
    message!: string
}