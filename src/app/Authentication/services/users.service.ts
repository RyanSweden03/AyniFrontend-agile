import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {BaseService} from "../../shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService<User>{

  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = '/users';
  }
}
