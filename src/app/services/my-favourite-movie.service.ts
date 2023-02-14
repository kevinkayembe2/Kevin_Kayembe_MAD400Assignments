import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOVIES } from '../data/mock-content';
import { IContent } from '../models/icontent';

@Injectable({
  providedIn: 'root'
})
export class MyFavouriteMovieService {

  constructor() { }

  getContent(): Observable<IContent[]> {
    return of(MOVIES);
  }
}
