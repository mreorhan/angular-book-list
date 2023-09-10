import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import {Book} from "./models/book";
import {BookDataRestService} from "./book-data-rest.service";

describe('BookDataService', () => {
  let service: BookDataRestService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookDataRestService],
    });

    service = TestBed.inject(BookDataRestService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

/*  it('should retrieve books from the API via GET', () => {
    const mockBooks: Book[] = BookDataRestService.BOOK_DATA;

    service.get().subscribe((books) => {
      expect(books).toEqual(mockBooks);
    });

    const req = httpTestingController.expectOne('https://api.example.com/books');
    expect(req.request.method).toEqual('GET');


    req.flush(mockBooks);
  });*/
});
