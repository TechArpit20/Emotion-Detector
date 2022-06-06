import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUp, SignUpOutput } from 'src/app/models/signup.model';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { CustomValidators } from 'src/app/services/custom-validator/custom-validator.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  isShow = false;
  role = '';
  agreeTerms = false;
  errMessage = '';
  loading = this.spinner.getLoader;
  pass_val=""

  changeTerms() {
    this.agreeTerms = !this.agreeTerms;
  }

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password') ===null? "": group.get('password')?.value;
    let confirmPass = group.get('confirmPassword') === null? "": group.get('confirmPassword')?.value;
    return pass === confirmPass ? null : { notSame: true }
  }

  SignUpUserData = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirm_password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        CustomValidators.passMatch()
      ]),
      role: new FormControl('', [Validators.required]),
      skills: new FormControl(''),
    }
  );

  get password_val(){
    return this.SignUpUserData.get('password')?.value
  }

  constructor(
    private route: Router,
    private apiService: ApiService,
    private authService: AuthService,
    private spinner: SpinnerService
  ) {}

  ngOnInit(): void {}

  get f() {
    return this.SignUpUserData.controls;
  }



  submit() {
    const data: any = this.SignUpUserData.value;
    // data.skills = data.skills?.split(',')
    if (data.role === 'Subject Expert') {
      data.skills = data.skills.split(',');
    } else {
      data.skills = null;
    }
    this.apiService.signup(data).subscribe(
      (res: SignUpOutput) => {
        this.errMessage = '';
        this.authService.login({
          id: res.id,
          name: data.name,
          username: data.username,
          role: data.role,
        });
        if (data.role === 'HR') {
          this.route.navigate(['/user/dashboard']);
        } else {
          this.route.navigate(['/expert/expert-dashboard']);
        }
      },
      (err) => {
        try {
          this.errMessage = err.error.error;
        } catch {
          this.errMessage = 'Please mention maximum 5 skills only';
        }
      }
    );
  }
  toggleDisplay(event: any) {
    if (event.target.value === 'Subject Expert') {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  changeRole(role: string) {
    if (role === 'HR') {
      this.role = 'HR';
    } else {
      this.role = 'EXPERT';
    }
  }
}
