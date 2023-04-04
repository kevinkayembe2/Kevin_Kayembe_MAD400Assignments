import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContent } from '../models/icontent';
import { MyFavouriteMovieService } from '../services/my-favourite-movie.service';

@Component({
  selector: 'app-content-list-item-detail',
  templateUrl: './content-list-item-detail.component.html',
  styleUrls: ['./content-list-item-detail.component.scss']
})
export class ContentListItemDetailComponent implements OnInit {
  id?: number;
  movieDetailItem?: IContent;

  constructor(private route: ActivatedRoute,
    private movieService: MyFavouriteMovieService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('idNumberValue'));

      this.movieService.getContentItem(this.id).subscribe((movie: IContent) => {
        console.warn("Got the item in the detail: ", movie);
         this.movieDetailItem = movie;
      });

    });
  }
}
