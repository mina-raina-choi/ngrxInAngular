import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from "@angular/http";
import {Store, StoreModule, provideStore} from "@ngrx/store";

import {AppComponent} from "./app.component";
import {ProximitySelector} from "./components/proximity-selector.component";
import {SearchBox} from "./components/search-box.component";
import {SearchReducer} from "./reducers/search.reducer";
import { YouTubeService } from './services/youtube.service';

const storeManager = provideStore({ currentSearch: SearchReducer });

@NgModule({
  declarations: [
    AppComponent,
    SearchBox, ProximitySelector
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule, storeManager
  ],
  providers: [YouTubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
