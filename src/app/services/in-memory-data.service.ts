import { Injectable } from '@angular/core';
import { IContent } from '../models/icontent';
import { MOVIES } from '../data/mock-content';
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let movies: IContent[] = MOVIES;
    return { movies };
  }

  //This runs when a new item is added to the database
  genId(movies: IContent[]): number {
    if (movies.length > 0) {
      let movieIds: number[] = [];
      movies.forEach((individualCake) => {
        if (!individualCake.id) {
          return;
        }

        movieIds.push(individualCake.id);
      })

      //Using the spread operator
      return Math.max(...movieIds) + 1;
    }

    return 0;
  }
}
