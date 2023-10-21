import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {User} from "../../model/user";
import {registerUser} from "../../states/user.actions";
import {selectIsAuthenticated} from "../../states/user.selector";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  signUpForm!: FormGroup;
  isAuthenticated: boolean = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private store: Store) {

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

      // Call to store
      const user: User = {
        id: 0,
        username: username,
        email: email,
        rol: '',
        isAuthenticated: true
      };
      this.store.dispatch(registerUser({user}));
      this.store.select(selectIsAuthenticated)
        .subscribe((isAuthenticated) => this.isAuthenticated = isAuthenticated);
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

  ngOnInit(): void {

  }
}
