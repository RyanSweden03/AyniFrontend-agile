import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Activity} from "../model/activity";
import {BaseService} from "../../../../../shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class ActivityApiService extends BaseService<Activity>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/activities';
  }
}
