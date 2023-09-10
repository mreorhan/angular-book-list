import { Component, OnInit } from '@angular/core';
import {Book} from "../../data/book-data/models/book";
import {BookDataService} from "../../data/book-data/book-data.service";
import {map} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books!: Book[];

  constructor(private bookDataService: BookDataService) {
  }

  ngOnInit(){
    this.getBooks();
  }

  getBooks(){
    this.bookDataService.get().pipe(map(bookList => this.books = bookList)).subscribe();
  }

}
