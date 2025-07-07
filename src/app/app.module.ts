import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';              // <-- Add this for ngModel
import { HttpClientModule } from '@angular/common/http';   // <-- Add this for HTTP calls

import { AppComponent } from './app.component';
import { SearchComponent } from './features/search/search.component';

import { RouterModule } from '@angular/router';
import { DishDetailComponent } from './features/dish-detail/dish-detail.component';
import { RestaurantDetailComponent } from './features/restaurant-detail/restaurant-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DishDetailComponent,
    RestaurantDetailComponent,
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
