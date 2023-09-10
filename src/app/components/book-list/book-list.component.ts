import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../data/book-data/models/book";
import {SelectItem} from "primeng/api";
// @ts-ignore
import * as _ from "lodash";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  private _bookList!: Book[];
  filteredBookList!: Book[];

  @Input() set bookList(list: Book[]) {
    this._bookList = list;
    this.filteredBookList = list;
    if (!!list) {
      debugger
      const uniqueList = _.uniqBy(list, (e: Book) => {
        return e.category;
      });
      const bookCategoryList = uniqueList?.map((itm: Book) => ({name: itm.category})) || [];
      this.bookCategoryList = [{name: 'All'}, ...bookCategoryList]
    }
  };

  get bookList() {
    return this._bookList;
  }

  constructor(private router: Router) {
  }

  sortOrder!: number;

  sortField!: string;

  private bookCategoryList: any;

  get bookCategories() {
    if(!this.bookCategoryList){
      return []
    }
    return this.bookCategoryList;
  }

  ngOnInit(): void {
  }

  filterBooks(event: any) {
    debugger
    if(!event?.value){
      return;
    }
    if(event.value?.name==='All'){
      this.filteredBookList = this.bookList;
    } else {
      this.filteredBookList = _.filter(this.bookList, (itm: Book) => itm.category === event.value.name)
    }
  }

  goToBookDetails(book: Book){
    this.router.navigateByUrl('book-details/' + book.id, {state: book})
  }

}
