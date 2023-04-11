import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list/content-list.component';
import { ContentListItemComponent } from './content-list-item/content-list-item/content-list-item.component';
import { ContentListItemDetailComponent } from './content-list-item-detail/content-list-item-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { ContentListItemSearchComponent } from './content-list-item-search/content-list-item-search.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TopNavigationBarComponent } from './top-navigation-bar/top-navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentListItemComponent,
    ContentListItemDetailComponent,
    ContentListItemSearchComponent,
    NotFoundComponent,
    TopNavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
