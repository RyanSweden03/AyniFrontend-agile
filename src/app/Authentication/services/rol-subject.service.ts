import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RolSubjectService {
  private rolSubject = new Subject<string>();
  rol$ = this.rolSubject.asObservable();
  constructor() { }

  emitRol(value: string){
    this.rolSubject.next(value);
  }
}
