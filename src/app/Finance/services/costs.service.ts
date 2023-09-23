import { Injectable } from '@angular/core';
import {BaseCostService} from "../../shared/services/base-cost.service";
import {CostModel} from "../model/cost-model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CostsService extends BaseCostService<CostModel>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint= '/costList';
  }
}
