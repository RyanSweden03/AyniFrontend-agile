import { Injectable } from '@angular/core';
import {Order} from "../model/order";
import {BaseService} from "../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends BaseService<Order> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint= '/orders';
  }
}
