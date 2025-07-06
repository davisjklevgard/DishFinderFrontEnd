import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Dish {
  id: number;
  name: string;
  description: string;
  // Add other fields matching your DishDTO
}

@Injectable({ providedIn: 'root' })
export class DishService {
  private baseUrl = 'http://localhost:8080/api/dishes';

  constructor(private http: HttpClient) {}

  getDish(id: number): Observable<Dish> {
    return this.http.get<Dish>(`${this.baseUrl}/${id}`);
  }

  // Optional: If you ever search dishes separately
  search(term: string): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${this.baseUrl}?search=${term}`);
  }
}
