import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import {BookDataModule} from "./data/book-data/book-data.module";
import { DataViewModule } from 'primeng/dataview';
import {DropdownModule} from "primeng/dropdown";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { HomeComponent } from './pages/home/home.component';
import {ButtonModule} from "primeng/button";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {RouterTestingModule} from "@angular/router/testing";

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,RouterTestingModule,
    AppRoutingModule,
    BookDataModule,
    DataViewModule,
    DropdownModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ButtonModule,
    ProgressSpinnerModule

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
