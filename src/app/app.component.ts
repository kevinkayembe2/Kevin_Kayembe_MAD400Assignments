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
    this.getTheNewItem("3");
  }

  getTheNewItem(newIdNumber: string): void {
    console.warn("Getting an item: ", newIdNumber);
    this.movieService.getContentItem(Number(newIdNumber)).subscribe((movie: IContent) => {
      console.warn("Got the item: ", movie);
      this.singleMovie = movie;
    });
  }
}
