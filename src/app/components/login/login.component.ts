import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import {FormGroup, FormControl, Validators, UntypedFormControl, Form } from '@angular/forms';
import {Router} from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { Login, LoginOutput } from 'src/app/models/signup.model';

// import LoginOutput from 'src/app/models/signup.model';

// import ApiService from 'src/app/services/api/api.service';

// import AuthService from 'src/app/services/auth/auth.service'; 
// import SpinnerService from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ApiService, private authService: AuthService, private route: Router) { }

  errMessage:string='';

  form:FormGroup= new FormGroup({
    email: new UntypedFormControl('',[Validators.required, Validators.email]),
    password: new UntypedFormControl('',Validators.required)
  })

  submit(){
    this.apiService.login(this.form.value).subscribe((res:LoginOutput)=>{
      this.errMessage=""
      this.authService.login({"id":res.id,"name":res.name,"username":res.username});
      this.route.navigate(["/user/dashboard"])
    },
    (err)=>{
      console.log(err)
      this.errMessage=err.error.error;
      // console.log(err)
    }
    )
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()){

    }
  }


}
