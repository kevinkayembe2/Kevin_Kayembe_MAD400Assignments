import { TestBed } from '@angular/core/testing';

import { MyFavouriteMovieService } from './my-favourite-movie.service';

describe('MyFavouriteMovieService', () => {
  let service: MyFavouriteMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFavouriteMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
