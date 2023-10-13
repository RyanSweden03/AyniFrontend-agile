import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../../shared/services/base.service";
import {Order} from "../model/order";

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService<Order>  {


  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = '/users';
  }
}
