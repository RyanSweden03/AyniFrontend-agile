import { Injectable } from '@angular/core';
import {BaseCostService} from "../../shared/services/base-cost.service";
import {Cost} from "../model/cost-model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CostsService extends BaseCostService<Cost>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint= '/costlist';
  }
}
