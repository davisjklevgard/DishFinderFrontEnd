import { Component } from '@angular/core';
import { SearchService, SearchResponse, Restaurant, Dish } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  query: string = '';                // Bound to the input field for user search text
  searchResults?: SearchResponse;    // Holds the data returned from the API
  isLoading: boolean = false;        // Tracks if a search is currently in progress
  error: string = '';                // Stores error messages

  constructor(private searchService: SearchService) {}

  /**
   * Called when the user submits the search.
   * Initiates an API call via SearchService and updates the UI with results or error.
   */
  onSearch(): void {
    if (!this.query.trim()) {
      return; // Don't search if the input is empty or whitespace
    }

    this.isLoading = true;
    this.error = '';
    this.searchResults = undefined;

    this.searchService.search(this.query).subscribe({
      next: (response) => {
        this.searchResults = response;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Search error:', err);
        this.error = 'An error occurred while searching. Please try again.';
        this.isLoading = false;
      }
    });
  }
}
