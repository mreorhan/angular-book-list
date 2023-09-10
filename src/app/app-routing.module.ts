import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookDetailsComponent} from "./pages/book-details/book-details.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: HomeComponent
  },
  {
    path: 'book-details/:bookId', component: BookDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
