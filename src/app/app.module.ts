import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';              // <-- Add this for ngModel
import { HttpClientModule } from '@angular/common/http';   // <-- Add this for HTTP calls

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component'; // <-- This was generated earlier

import { RouterModule } from '@angular/router';
import { DishComponent } from './dish/dish.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DishComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
