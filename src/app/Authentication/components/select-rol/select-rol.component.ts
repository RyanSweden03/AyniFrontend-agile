import {Component, Output} from '@angular/core';
import {Router} from "@angular/router";
import {RolSubjectService} from "../../services/rol-subject.service";

@Component({
  selector: 'app-select-rol',
  templateUrl: './select-rol.component.html',
  styleUrls: ['./select-rol.component.css']
})
export class SelectRolComponent {
  rol !: string;
  constructor(private router: Router,
              private rolService: RolSubjectService) {
  }
  onFarmerSelected() {
    this.rol = 'farmer';
    this.rolService.emitRol(this.rol);

    // Complete SignIn

    this.router.navigate(["farmer-home"])
  }

  onMerchantSelected() {
    this.rol = 'merchant';
    this.rolService.emitRol(this.rol);
    // Complete SignIn

    this.router.navigate(["merchant-home"])
  }

}
