import { Injectable } from '@angular/core';
import {BaseDataService} from "../base/base-data.service";
import {Book} from "./models/book";
import {delay, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookDataRestService implements BaseDataService<Book>{
  private apiUrl = 'https://api.example.com/books'; // this url is not working

  static readonly BOOK_DATA: Book[] = [
    {
      "id": 1,
      "title": "The Silent Patient",
      "author": "Alex Michaelides",
      "category": "Mystery",
      "coverImageUrl": "https://books.google.com.tr/books/publisher/content?id=a6NnDwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1oG8xy5P2Kv8ClufATsdzz97zcAg&w=1280",
      "description": "A gripping psychological thriller about a woman's shocking act of violence and the therapist obsessed with uncovering her motive."
    },
    {
      "id": 2,
      "title": "Where the Crawdads Sing",
      "author": "Delia Owens",
      "category": "Fiction",
      "coverImageUrl": "https://m.media-amazon.com/images/I/81HA6TJ5K-L._AC_UF1000,1000_QL80_.jpg",
      "description": "A lyrical and haunting novel about a young woman living in isolation in the marshes of North Carolina and the mysteries that surround her life."
    },
    {
      "id": 3,
      "title": "Becoming",
      "author": "Michelle Obama",
      "category": "Memoir",
      "coverImageUrl": "https://m.media-amazon.com/images/I/81dDwAzxtrL._AC_UF1000,1000_QL80_.jpg",
      "description": "The memoir of former First Lady Michelle Obama, offering a deeply personal account of her life, her journey, and her experiences in the White House."
    },
    {
      "id": 4,
      "title": "Educated",
      "author": "Tara Westover",
      "category": "Biography",
      "coverImageUrl": "https://m.media-amazon.com/images/I/71i+U0qfKQL._AC_UF894,1000_QL80_.jpg",
      "description": "A memoir of a woman who grows up in a strict and abusive household in rural Idaho but escapes to earn a PhD from Cambridge University."
    },
    {
      "id": 5,
      "title": "The Girl on the Train",
      "author": "Paula Hawkins",
      "category": "Thriller",
      "coverImageUrl": "https://media.istockphoto.com/id/1216251206/vector/no-image-available-icon.jpg?s=170667a&w=0&k=20&c=N-XIIeLlhUpm2ZO2uGls-pcVsZ2FTwTxZepwZe4DuE4=",
      "description": "A psychological thriller about a woman who becomes entangled in a web of deception and murder while commuting on a train."
    },
    {
      "id": 6,
      "title": "Harry Potter and the Sorcerer's Stone",
      "author": "J.K. Rowling",
      "category": "Fantasy",
      "coverImageUrl": "https://media.istockphoto.com/id/1216251206/vector/no-image-available-icon.jpg?s=170667a&w=0&k=20&c=N-XIIeLlhUpm2ZO2uGls-pcVsZ2FTwTxZepwZe4DuE4=",
      "description": "The first book in the beloved Harry Potter series, following the young wizard's journey at Hogwarts School of Witchcraft and Wizardry."
    },
    {
      "id": 7,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "category": "Classics",
      "coverImageUrl": "https://media.istockphoto.com/id/1216251206/vector/no-image-available-icon.jpg?s=170667a&w=0&k=20&c=N-XIIeLlhUpm2ZO2uGls-pcVsZ2FTwTxZepwZe4DuE4=",
      "description": "A classic novel set in the American South during the 1930s, addressing themes of racial injustice and moral growth."
    },
    {
      "id": 8,
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "category": "Fiction",
      "coverImageUrl": "https://media.istockphoto.com/id/1216251206/vector/no-image-available-icon.jpg?s=170667a&w=0&k=20&c=N-XIIeLlhUpm2ZO2uGls-pcVsZ2FTwTxZepwZe4DuE4=",
      "description": "A philosophical novel about a shepherd named Santiago who embarks on a journey to find his personal legend."
    },
    {
      "id": 9,
      "title": "Gone Girl",
      "author": "Gillian Flynn",
      "category": "Mystery",
      "coverImageUrl": "https://media.istockphoto.com/id/1216251206/vector/no-image-available-icon.jpg?s=170667a&w=0&k=20&c=N-XIIeLlhUpm2ZO2uGls-pcVsZ2FTwTxZepwZe4DuE4=",
      "description": "A psychological thriller about the mysterious disappearance of a woman and the secrets that her husband may be hiding."
    },
    {
      "id": 10,
      "title": "The Da Vinci Code",
      "author": "Dan Brown",
      "category": "Mystery",
      "coverImageUrl": "https://png.pngitem.com/pimgs/s/7-76520_free-download-book-png-photo-books-png-transparent.png",
      "description": "A gripping mystery thriller that explores hidden symbols and secrets in the art world, featuring Harvard symbologist Robert Langdon."
    },
    // Add more entries here with real data...
  ]
  constructor() { }

  getBookById(bookId: number): Observable<Book> {
    const selectedBook = BookDataRestService.BOOK_DATA.find(itm => itm.id= bookId);
    if(!selectedBook){
      return of()
    }
    return of(selectedBook).pipe(delay(300));
  }
  get(): Observable<Book[]> {
    return of(BookDataRestService.BOOK_DATA).pipe(delay(300));
  }
}
