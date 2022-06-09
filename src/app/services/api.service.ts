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

  imageDetect(){
    const result={"data":"hello"}
    // result.append("image",data.image);
    return this.http.post(environment.URI+"/image",result);
  }

  
}
