import { Component } from '@angular/core';
import { SearchService, SearchResults } from '../../core/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  term = '';
  results: SearchResults | null = null;

  constructor(private searchService: SearchService) {}

  onSearch() {
    if (this.term.trim()) {
      this.searchService.search(this.term.trim()).subscribe(data => {
        console.log('SEARCH RESULTS:', data);  // 👈 add this
        this.results = data;
      });
    }
  }

}
