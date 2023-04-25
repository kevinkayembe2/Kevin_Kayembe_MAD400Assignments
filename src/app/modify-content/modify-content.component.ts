import { Component } from '@angular/core';
import { IContent } from '../models/icontent';
import { INVALIDMOVIE } from '../data/mock-content';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  newContentItem: IContent = INVALIDMOVIE;
  tagsToBeParsed: string = "";
}
