import { Component } from '@angular/core';
import { IContent } from 'src/app/models/icontent';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  movieArray: IContent[];

  constructor() {
    this.movieArray = [];
  }
}
