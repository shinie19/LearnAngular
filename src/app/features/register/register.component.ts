import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomvalidationService } from '../../services/customvalidation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  countries = ['Ha Noi', 'Da Nang', 'TP Ho Chi Minh'];

  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl('', [
      this.customValidator.validateCompare('password'),
    ]),
    country: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\+84\d{9,10}$/),
    ]),
  });

  constructor(private customValidator: CustomvalidationService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.registerForm.invalid) {
      alert('Form chưa hợp lệ!');
    } else {
      let obj = this.registerForm.value;
      console.log(obj);
      alert('Submit thành công!');
    }
  }
}
