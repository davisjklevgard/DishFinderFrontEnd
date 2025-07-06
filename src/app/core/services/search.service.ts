import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SearchResults {
  dishes: any[];       // Replace `any` with your Dish model
  restaurants: any[];  // Replace `any` with your Restaurant model
}

@Injectable({ providedIn: 'root' })
export class SearchService {
  private baseUrl = 'http://localhost:8080/api/search';

  constructor(private http: HttpClient) {}

  search(term: string): Observable<SearchResults> {
    const params = new HttpParams().set('term', term);
    return this.http.get<SearchResults>(this.baseUrl, { params });
  }
}
