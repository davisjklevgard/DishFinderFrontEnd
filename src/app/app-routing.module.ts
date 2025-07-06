import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './features/search/search.component';
// import other components here

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  // other routes, e.g.:
  // { path: 'dishes/:id', component: DishDetailComponent },
  // { path: '', redirectTo: '/search', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
