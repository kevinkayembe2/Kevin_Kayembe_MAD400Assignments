import { Component, OnInit } from '@angular/core';
import { IContent } from './models/icontent';
import { MyFavouriteMovieService } from './services/my-favourite-movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  singleMovie?: IContent;
  title = 'K_Kayembe_MyFavouriteMovies';

  constructor(private movieService: MyFavouriteMovieService) {}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
}
