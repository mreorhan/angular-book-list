import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookDataService} from "./book-data.service";
import {BookDataRestService} from "./book-data-rest.service";

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    {provide: BookDataService, useClass: BookDataRestService}
  ]
})
export class BookDataModule {
}
