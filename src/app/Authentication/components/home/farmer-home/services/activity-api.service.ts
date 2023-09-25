import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseHomeService} from "../../../../../shared/services/base-home.service";
import {Activity} from "../model/activity";

@Injectable({
  providedIn: 'root'
})
export class ActivityApiService extends BaseHomeService<Activity>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/activities';
  }
}
