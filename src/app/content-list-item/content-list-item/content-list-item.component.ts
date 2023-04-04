import { Component, Input } from '@angular/core';
import { IContent } from 'src/app/models/icontent';

@Component({
  selector: 'app-content-list-item',
  templateUrl: './content-list-item.component.html',
  styleUrls: ['./content-list-item.component.scss']
})
export class ContentListItemComponent {
  @Input() contentItemInputValue?: IContent;

  imageClicked(): void {
    console.log("ID: ", this.contentItemInputValue?.id, " Description: ", this.contentItemInputValue?.description)
  }
}
