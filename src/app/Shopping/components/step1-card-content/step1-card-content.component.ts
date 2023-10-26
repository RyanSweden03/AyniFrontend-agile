import { Component } from '@angular/core';
import {OrdersService} from "../../services/orders.service";
import {Order} from "../../model/order";
import {Router} from "@angular/router";

@Component({
  selector: 'sales-step1-card-content',
  templateUrl: './step1-card-content.component.html',
  styleUrls: ['./step1-card-content.component.css']
})
export class SalesStep1CardContentComponent {
  saleform1: Order;
  constructor(private salesService: OrdersService, private router: Router) {
    this.saleform1={id: 0, saleId:0, orderedBy:0, acceptedBy:0, description:'',quantity:0, status:'', orderedDate:'', totalPrice:'', paymentMethod:''};
  }

  onSubmit() {
    this.salesService.create(this.saleform1).subscribe(() => {
      this.router.navigate(['/sales']);
    });
  }

}
