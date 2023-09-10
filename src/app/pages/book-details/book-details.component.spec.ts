import {ComponentFixture, TestBed} from '@angular/core/testing';
import {BookDetailsComponent} from './book-details.component';
import {Book} from "../../data/book-data/models/book";
import {By} from "@angular/platform-browser";
import {BookDataRestService} from "../../data/book-data/book-data-rest.service";
import {RouterTestingModule} from "@angular/router/testing";
import {BookDataModule} from "../../data/book-data/book-data.module";


describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  let book: Book;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BookDetailsComponent],
      providers: [BookDataModule]
    });

    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;


    book = BookDataRestService.BOOK_DATA[0];


    component.book = book;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the book title', () => {
    const titleElement = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(titleElement.textContent).toContain(book.title);
  });

  it('should display the book author', () => {
    const authorElement = fixture.debugElement.query(By.css('h5')).nativeElement;
    expect(authorElement.textContent).toContain(book.author);
  });

  it('should display the book summary', () => {
    const authorElement = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(authorElement.textContent).toContain(book.description);
  });
});
