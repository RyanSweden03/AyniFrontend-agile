import {Component, Output} from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {updateRol} from "../../states/user.actions";

@Component({
  selector: 'app-select-rol',
  templateUrl: './select-rol.component.html',
  styleUrls: ['./select-rol.component.css']
})
export class SelectRolComponent {
  rol !: string;
  constructor(private router: Router,
              private store: Store) {
  }
  onFarmerSelected() {
    this.rol = 'farmer';
    this.store.dispatch(updateRol({rol: this.rol}));

    // Complete SignIn

    this.router.navigate(["farmer-home"])
  }

  onMerchantSelected() {
    this.rol = 'merchant';
    this.store.dispatch(updateRol({rol: this.rol}));
    // Complete SignIn

    this.router.navigate(["merchant-home"])
  }

}
