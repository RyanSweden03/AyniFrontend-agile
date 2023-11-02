import {Component, Output} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-select-rol',
  templateUrl: './select-rol.component.html',
  styleUrls: ['./select-rol.component.css']
})
export class SelectRolComponent {
  rol !: string;
  formData: any;

  constructor(private router: Router, private dataService: DataService, private usersService: UsersService) {
    this.formData = this.dataService.getFormData();
    console.log("aaaa",this.formData);
  }
  onFarmerSelected() {
    this.formData.rol = 'farmer';
    this.usersService.create(this.formData).subscribe(() => {
      this.router.navigate(["farmer-home"]);
    });
  }

  onMerchantSelected() {
    this.formData.rol = 'merchant';
    console.log(this.formData);
    this.usersService.create(this.formData).subscribe(() => {
      this.router.navigate(["merchant-home"]);
    });
  }
}
