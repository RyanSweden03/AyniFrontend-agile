import { Injectable } from '@angular/core';
import {Profit} from "../model/profit-model";
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class ProfitsService extends BaseService<Profit> {

  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = '/profits';
  }
}
