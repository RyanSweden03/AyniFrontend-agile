import { Injectable } from '@angular/core';
import {OrderDetail} from "../model/order-detail/order-detail";
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../../../../shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class MerchantHomeApiService extends BaseService<OrderDetail>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/order_details';
  }
}
