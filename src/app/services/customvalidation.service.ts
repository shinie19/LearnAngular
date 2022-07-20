import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CustomvalidationService {
  validateCompare(compareWith: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let controlCompare = control.parent?.get(compareWith);
      if (controlCompare?.value != control.value) {
        return { compare: true }; // có lỗi
      }
      return null; // không có lỗi
    };
  }
}
