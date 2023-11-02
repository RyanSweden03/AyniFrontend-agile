import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UsersService} from "../../services/users.service";
import {User} from "../../model/user";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent{
  signInForm!: FormGroup;
  users: User[] = [];
  user: User = new User();
  constructor(private fb: FormBuilder, private router: Router, private usersService: UsersService) {
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
  onSumbit() {
    if (this.signInForm.valid) {
      const email = this.signInForm.get('email')?.value;
      const password = this.signInForm.get('password')?.value;

      this.usersService.getUserByEmail(email).subscribe((response: User) => {
        this.user = response;

        console.log(this.user);

        if (this.user.password === password && this.user.rol === 'farmer') {
          this.router.navigate(['farmer-home']);
        } else if (this.user.password === password && this.user.rol === 'merchant') {
          this.router.navigate(['merchant-home']);
        } else {
          console.error("no login");
        }
      });

      console.log(this.user.id);
    }
  }

  redirectToSignup() {
    this.router.navigate(['signup']);
  }
}
