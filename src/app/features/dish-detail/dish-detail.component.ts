import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishService } from '../../core/services/dish.service';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html'
})
export class DishDetailComponent implements OnInit {
  dish: any;  // Replace with your Dish model

  constructor(
    private route: ActivatedRoute,
    private dishService: DishService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.dishService.getDish(+id).subscribe(data => this.dish = data);
    }
  }
}
