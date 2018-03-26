import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { CurrentSearch } from './models/search-query.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <div class="row">
      <search-box [store]="store"></search-box>
      <proximity-selector [store]="store"></proximity-selector>
  </div>
  <p>{{ state | json }}</p>
  `
})

export class AppComponent implements OnInit {
  private state: CurrentSearch;
  private currentSearch: Observable<CurrentSearch>;

  constructor(private store: Store<CurrentSearch>) {
    // select the state here
    this.currentSearch = this.store.select<CurrentSearch>('currentSearch');
  }

  ngOnInit() {
    // handle here the state's update
    this.currentSearch.subscribe((state: CurrentSearch) => {
      this.state = state;
    });
  }
}
