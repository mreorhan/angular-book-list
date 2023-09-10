import { Injectable } from '@angular/core';
import {BaseDataService} from "../base/base-data.service";
import {Book} from "./models/book";
import {delay, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export abstract class BookDataService implements BaseDataService<Book>{

  abstract get(): Observable<Book[]>;
  abstract getBookById(id: number): Observable<Book>;
}
