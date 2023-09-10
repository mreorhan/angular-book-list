import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({providedIn:'root'})
export abstract class BaseDataService<T> {
  abstract get(): Observable<T | T[]>;
}
