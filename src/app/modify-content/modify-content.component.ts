import { Component } from '@angular/core';
import { IContent } from '../models/icontent';
import { INVALIDMOVIE } from '../data/mock-content';
import { MyFavouriteMovieService } from '../services/my-favourite-movie.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  newContentItem: IContent = INVALIDMOVIE;
  tagsToBeParsed: string = "";
  contentAddedSuccessfully = false;

  constructor(private movieService: MyFavouriteMovieService) {
    this.resetContent();
  }

  addContent(): void {
    this.newContentItem.tags = this.tagsToBeParsed.split(",").map(tag => tag.trim()).filter(tag => tag.length > 0);
    this.newContentItem.id = undefined;
    this.movieService.addContentItem(this.newContentItem).subscribe(newItemFromServer => {
      console.log("Movie Successfully Added", newItemFromServer);

      this.contentAddedSuccessfully = true;

      this.resetContent();
    });
  }

  resetContent(): void {
    this.newContentItem = structuredClone(INVALIDMOVIE);
    this.tagsToBeParsed = "";
  }
}
