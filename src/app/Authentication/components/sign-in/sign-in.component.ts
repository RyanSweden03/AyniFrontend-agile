import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent {
  signInForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private usersService: UsersService) {
    /*this.signInForm = this.fb.group({
      username: new FormControl('', [
        Validators.required,
        Validators.username
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });*/

    this.signInForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      const credentials = {
        username: this.signInForm.get('username')?.value,
        password: this.signInForm.get('password')?.value,
      };

      this.usersService.signin(credentials).pipe(
      ).subscribe({
        next: (response) => {
          console.log('Signin successful:', response);
        },
        error: (error) => {
          console.error('Signin failed:', error);
        }
      });
    }
  }

  redirectToSignup() {
    this.router.navigate(['signup']);
  }

  redirectToHome() {

  }
}
