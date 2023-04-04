import { Component, OnInit } from '@angular/core';
import { IContent } from '../models/icontent';
import { MyFavouriteMovieService } from '../services/my-favourite-movie.service';

@Component({
  selector: 'app-content-list-item-search',
  templateUrl: './content-list-item-search.component.html',
  styleUrls: ['./content-list-item-search.component.scss']
})
export class ContentListItemSearchComponent implements OnInit {
  singleMovie?: IContent;

  constructor(private movieService: MyFavouriteMovieService) {}
  
  ngOnInit(): void {
    this.movieService.getContentItem(3).subscribe((movie: IContent) => {
      console.warn("Got the item: ", movie);
      this.singleMovie = movie;
    });
  }
}
