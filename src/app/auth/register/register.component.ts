import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
    surname: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
  });

  nameFormControl = this.form.controls.name;
  surnameFormControl = this.form.controls.surname;
  emailFormControl = this.form.controls.email;
  passFormControl = this.form.controls.password;
  codeFormControl = this.form.controls.code;

  constructor() {}

  ngOnInit(): void {}
}
