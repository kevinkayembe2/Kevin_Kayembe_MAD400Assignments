import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { INVALIDMOVIE, MOVIES } from '../data/mock-content';
import { IContent } from '../models/icontent';

@Injectable({
  providedIn: 'root'
})
export class MyFavouriteMovieService {

  constructor() { }

  getContent(): Observable<IContent[]> {
    return of(MOVIES);
  }

  getContentItem(index: number): Observable<IContent> {
    console.warn("Got to get content item");
    let movieFound: IContent | undefined;
    for (let i = 0; i < MOVIES.length; i++) {
      if (MOVIES[i].id == index) {
        movieFound = MOVIES[i];
        break;
      }
    }
    if (!movieFound) {
      return of(INVALIDMOVIE);
    }
    console.warn("Got the item", movieFound);
    return of(movieFound);
  }

  addContentItem(item: IContent): Observable<IContent[]> {
    if (MOVIES.find((movie: IContent) => movie.id === item.id) == undefined) {
      MOVIES.push(item);
    }

    return of(MOVIES);
  }
}
