import { Injectable } from '@angular/core';
import {Cost} from "../model/cost-model";
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class CostsService extends BaseService<Cost>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint= '/costs';
  }
}
