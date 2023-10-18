import { Injectable } from '@angular/core';
import {Sale} from "../model/sale";
import {BaseService} from "../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SalesService extends BaseService<Sale> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint= '/sales';
  }
}
