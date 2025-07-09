import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../core/services/restaurant.service';
import {UserListService} from "../../core/services/user-list.service";

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: any;  // Replace with your Restaurant model

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private userListService: UserListService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.restaurantService.getRestaurant(+id).subscribe(data => this.restaurant = data);
    }
  }

  saveRestaurant() {
    const userId = 1; // Replace with real user ID later
    this.userListService.saveRestaurant(this.restaurant.id, userId).subscribe(() => {
      console.log('Restaurant saved.');
    });
  }

}
