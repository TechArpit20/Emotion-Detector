import { Recruitment } from "./create-recruitment.model";

export class QuizOutput {
  id!: string;
  quiz_link!: string;
  end_date!: Date;
  due_time!: string;
  questions!: string;
  recruitment!: Recruitment;
  expert_id!: string;
}


export class QuizInput {
    recruitment!: string;
    quiz_link!: string;
    end_date!: Date;
    due_time!: string;
    questions!: string;
  }