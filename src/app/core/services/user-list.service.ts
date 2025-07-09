import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserListService {
  private baseUrl = 'http://localhost:8080/api/lists';

  constructor(private http: HttpClient) {}

  saveDish(dishId: number, userId: number): Observable<void> {
    const params = new HttpParams()
      .set('dishId', dishId)
      .set('userId', userId);
    return this.http.post<void>(`${this.baseUrl}/save-dish`, null, { params });
  }

  saveRestaurant(restaurantId: number, userId: number): Observable<void> {
    const params = new HttpParams()
      .set('restaurantId', restaurantId)
      .set('userId', userId);
    return this.http.post<void>(`${this.baseUrl}/save-restaurant`, null, { params });
  }
}
