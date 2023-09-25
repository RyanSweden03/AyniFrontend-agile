import { Injectable } from '@angular/core';
import {Bill} from "../model/bill-model";
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class BillsService extends BaseService<Bill> {

  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = '/billslist';
  }
}
