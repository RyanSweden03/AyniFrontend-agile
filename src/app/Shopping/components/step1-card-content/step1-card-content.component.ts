import { Component } from '@angular/core';
import {SalesService} from "../../services/sales.service";
import {Sale} from "../../model/sale";
import {Router} from "@angular/router";

@Component({
  selector: 'sales-step1-card-content',
  templateUrl: './step1-card-content.component.html',
  styleUrls: ['./step1-card-content.component.css']
})
export class SalesStep1CardContentComponent {
  saleform1: Sale;
  constructor(private salesService: SalesService, private router: Router) {
    this.saleform1={id: 0, productId:0, userId:0, description:'',quantity:0, orderedDate:'', totalPrice:'', method:''};
  }

  onSubmit() {
    this.salesService.create(this.saleform1).subscribe(() => {
      this.router.navigate(['/sales']);
    });
  }

}
