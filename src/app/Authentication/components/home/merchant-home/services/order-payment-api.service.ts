import { Injectable } from '@angular/core';
import {BaseHomeService} from "../../../../../shared/services/base-home.service";
import {OrderPayment} from "../model/order-payment/order-payment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrderPaymentApiService extends BaseHomeService<OrderPayment>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/order_payment';
  }
}
