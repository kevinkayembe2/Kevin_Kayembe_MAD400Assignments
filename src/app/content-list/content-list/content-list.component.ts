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
    this.movieSerivce.getContent();
  }
}
