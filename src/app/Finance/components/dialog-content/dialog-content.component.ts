import { Component} from '@angular/core';
import {Router} from "@angular/router";
import {Cost} from "../../model/cost-model";
import {CostsService} from "../../services/costs.service";

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent {
  freshnessList = ["Producto", "Servicio"];
  form: Cost;
  constructor(private costsService: CostsService, private router: Router) {
    this.form={id: 0,costName:'',date:'',description:'',price:0,quantity:''};
  }

  onSubmit() {
    this.costsService.create(this.form).subscribe(() => { });
  }
}
