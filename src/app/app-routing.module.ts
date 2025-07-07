import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './features/search/search.component';
import { DishDetailComponent } from './features/dish-detail/dish-detail.component';
import {RestaurantDetailComponent} from "./features/restaurant-detail/restaurant-detail.component";

// import other components here

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'restaurants/:id', component: RestaurantDetailComponent},
  { path: 'dishes/:id', component: DishDetailComponent },
  // { path: '', redirectTo: '/search', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
