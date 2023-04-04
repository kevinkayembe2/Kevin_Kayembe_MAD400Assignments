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
