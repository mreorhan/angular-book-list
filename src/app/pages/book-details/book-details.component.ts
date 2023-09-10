import {Component, OnInit} from '@angular/core';
import {Book} from "../../data/book-data/models/book";
// @ts-ignore
import * as _ from "lodash";
import {ActivatedRoute, Router} from "@angular/router";
import {BookDataService} from "../../data/book-data/book-data.service";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book!: Book;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private bookService: BookDataService) {
    this.book = this.router.getCurrentNavigation()?.extras.state as Book;
  }

  ngOnInit(): void {
    this.getBookDetails();
  }

  getBookDetails() {
    if (this.book) {
      return;
    }
    let bookId = _.get(this.activatedRoute.snapshot.params, 'bookId');


    this.bookService.getBookById(+bookId).subscribe(response => {
      this.book = response;
    })
  }

  goToHome(){
    this.router.navigateByUrl('/')
  }

}
