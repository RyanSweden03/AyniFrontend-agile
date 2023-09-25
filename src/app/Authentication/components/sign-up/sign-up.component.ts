import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm!: FormGroup;
  isAuthenticated: boolean = true;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signUpForm = this.fb.group({
      username: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }
  onSumbit(){
    if (this.signUpForm.valid){
      const email = this.signUpForm.get('email')?.value;
      const password = this.signUpForm.get('password')?.value;
      const username = this.signUpForm.get('username')?.value;
      console.log(email + password + username);

      // Call to Authentication Api

      // Redirect to select-rol or display error
      if(this.isAuthenticated){
        this.router.navigate(['select-rol']);
      } else{
        console.log('Not Authenticated')
      }
    }
  }

  redirectToSignin() {
    this.router.navigate(['signin'])
  }
}
