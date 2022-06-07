import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginOutput } from 'src/app/models/signup.model';
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

  submit() {
    const data: any = this.SignUpUserData.value;
    this.apiService.signup(data).subscribe(
      (res: LoginOutput) => {
        this.errMessage = '';
        this.authService.login({
          id: res.id,
          name: data.name,
          username: data.username,
        });
        this.route.navigate(['/user/dashboard']);
      },
      (err) => {
        try {
          this.errMessage = err.error.error;
        } catch {
          this.errMessage = 'Something went wrong!!!';
        }
      }
    );
  }


}
