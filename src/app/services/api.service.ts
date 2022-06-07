import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ForgotPass, InputTextData, Login, LoginOutput, OutputData, SignUp } from '../models/signup.model'
import { Observable } from 'rxjs';
// import { AllExperts, CreateRecruitmentInput, Recruitment } from 'src/app/models/create-recruitment.model';
// import { CompletedProcessCandidates, UnderProcessCandidates } from 'src/app/models/Candidate.model';
// import { QuizInput, QuizOutput } from 'src/app/models/Quiz.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient, private router:Router) { }

  login(result:Login):Observable<LoginOutput>{
    return this.http.post<LoginOutput>(environment.URI+"/login",result)
  }

  signup(data:SignUp):Observable<LoginOutput>{
    return this.http.post<LoginOutput>(environment.URI+"/signup",data)
  }

  textemotions(data: InputTextData): Observable<OutputData>{
    return this.http.post<OutputData>(environment.URI+"/text",data)
  }

  addRecruitment(data:any){
    const result=new FormData()
    result.append("name",data.name);
    result.append("category",data.category);
    result.append("skills",data.skills)
    result.append("start_date",data.start_date.toString())
    result.append("end_date",data.end_date.toString())
    result.append("expert",data.expert)
    result.append("resume",data.resume);
    result.append("created_by",localStorage.getItem("id") || "1")

    return this.http.post(environment.URI+"/createRecruitment/",result);
  }

  
}
