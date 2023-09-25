import { Injectable } from '@angular/core';
import {OrderPayment} from "../model/order-payment/order-payment";
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../../../../shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class OrderPaymentApiService extends BaseService<OrderPayment>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/order_payment';
  }
}
