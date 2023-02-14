import { Component, OnInit } from '@angular/core';
import { IContent } from 'src/app/models/icontent';
import { MyFavouriteMovieService } from 'src/app/services/my-favourite-movie.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  movieArray: IContent[];

  constructor(private movieSerivce: MyFavouriteMovieService) {
    this.movieArray = [];
  }

  ngOnInit(): void {
    this.movieSerivce.getContent().subscribe((movies: IContent[]) => {
      console.log("Getting the movie list");
      this.movieArray = movies;
    });

    this.movieSerivce.getContentItem(2).subscribe((movie: IContent) => {
      console.log("Testing getting a single content item: ", movie);
    })
  }
}
