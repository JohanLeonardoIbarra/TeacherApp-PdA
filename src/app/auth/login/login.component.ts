import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),
  });

  emailFormControl = this.form.controls.email;
  passFormControl = this.form.controls.password;
  constructor() {}

  ngOnInit(): void {
    this.emailFormControl.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}
