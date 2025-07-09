import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishService } from '../../core/services/dish.service';
import { UserListService } from '../../core/services/user-list.service';

import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html'
})
export class DishDetailComponent implements OnInit {
  dish: any;  // Replace with your Dish model
  private dishId!: number;

  constructor(
    private route: ActivatedRoute,
    private dishService: DishService,
    private userListService: UserListService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.dishId = +idParam;               // <-- store immediately
        this.dishService.getDish(this.dishId)
          .pipe(tap(d => console.log('Dish loaded', d)))
          .subscribe(d => this.dish = d);
      }
    });
  }

  saveDish() {
    const userId = 1; // TODO replace with real auth user
    if (!this.dishId) { console.error('dishId missing'); return; }

    this.userListService.saveDish(this.dishId, userId).subscribe({
      next: () => console.log('Dish saved'),
      error: err => console.error('Save failed', err)
    });
  }

}
