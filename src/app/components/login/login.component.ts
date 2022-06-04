import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';

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

  constructor() { }

  errMessage:string='';

  form= new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',Validators.required)
  })

  submit(){

  }

  ngOnInit(): void {
  }

}
