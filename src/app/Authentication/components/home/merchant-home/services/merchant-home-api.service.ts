import { Injectable } from '@angular/core';
import {BaseHomeService} from "../../../../../shared/services/base-home.service";
import {OrderDetail} from "../model/order-detail/order-detail";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MerchantHomeApiService extends BaseHomeService<OrderDetail>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/order_details';
  }
}
