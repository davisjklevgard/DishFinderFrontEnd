import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Restaurant {
  id: number;
  name: string;
  address: string;
  // Add other fields matching your RestaurantDTO
}

@Injectable({ providedIn: 'root' })
export class RestaurantService {
  private baseUrl = 'http://localhost:8080/api/restaurants';

  constructor(private http: HttpClient) {}

  getRestaurant(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${this.baseUrl}/${id}`);
  }

  // Optional: If you ever search restaurants separately
  search(term: string): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.baseUrl}?search=${term}`);
  }
}
