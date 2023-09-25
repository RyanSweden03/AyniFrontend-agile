import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent{
  signInForm!: FormGroup;
  isAuthenticated: boolean = false;
  constructor(private fb: FormBuilder, private router: Router) {
    this.signInForm = this.fb.group({
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
    if (this.signInForm.valid){
      const email = this.signInForm.get('email')?.value;
      const password = this.signInForm.get('password')?.value;

      // Call to Authentication Api

      // Redirect to select-rol or display error
      if(this.isAuthenticated){
        this.router.navigate(['home']);
      } else{
        console.log('Not Authenticated')
      }
    }
  }

  redirectToSignup() {
    this.router.navigate(['signup'])
  }
}
