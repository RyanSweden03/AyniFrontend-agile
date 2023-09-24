import { Injectable } from '@angular/core';
import {BaseHomeService} from "../../../../../shared/services/base-home.service";
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FarmerHomeApiService extends BaseHomeService<Product>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/products';
  }
}
