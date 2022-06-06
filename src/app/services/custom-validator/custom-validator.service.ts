import {
  AbstractControl,
  ValidatorFn,
  ValidationErrors,
} from '@angular/forms';

export class CustomValidators {
  
  static passMatch(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password=control.parent?.get('password')?.value
      const confirm_password= control.value;
      return password!=confirm_password ? {confirm_password: {value: control.value}} : null;
    };
  }
}
