import { Component } from '@angular/core';
import {OrderDetail} from "../../model/order-detail/order-detail";
import {MerchantHomeApiService} from "../../services/merchant-home-api.service";
import {OrderPaymentApiService} from "../../services/order-payment-api.service";
import {OrderPayment} from "../../model/order-payment/order-payment";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-merchant-main-content',
  templateUrl: './merchant-main-content.component.html',
  styleUrls: ['./merchant-main-content.component.css']
})
export class MerchantMainContentComponent {
  orders !: OrderDetail[];
  orders_payment !: OrderPayment[];

  // Table
  displayedColumns: string[] = ['name', 'quantity', 'ordered_date'];
  dataSource!: MatTableDataSource<any>;
  constructor(private merchantApi: MerchantHomeApiService,
              private orderPaymentApi: OrderPaymentApiService) {
    this.merchantApi.getAll()
      .subscribe((response: any) => {
        this.orders = response;
      });
    this.orderPaymentApi.getAll()
      .subscribe((response: any) => {
        this.orders_payment = response;
        this.dataSource = new MatTableDataSource(this.orders_payment);
      });
  }
}
