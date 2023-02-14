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

    // let testGameToAdd: IContent = {
    //   id: 4,
    //   title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    //   description: "Johnny Depp starrs in as a dishonest, hilarious Captain Jack Sparrow.",
    //   author: "Gore Verbinksi",
    //   imgSrc: "https://upload.wikimedia.org/wikipedia/en/8/89/Pirates_of_the_Caribbean_-_The_Curse_of_the_Black_Pearl.png",
    //   type: "pirates"
    // }

    // this.movieSerivce.addContentItem(testGameToAdd).subscribe((movies: IContent[]) => {
    //   console.log("Testing adding a movie to the array: ", movies);
    // });

    let testGameToUpdate: IContent = {
      id: 0,
      title: "Pirates of the Caribbean: The Curse of the Black Pearl",
      description: "Johnny Depp starrs in as a dishonest, hilarious Captain Jack Sparrow.",
      author: "Gore Verbinksi",
      imgSrc: "https://upload.wikimedia.org/wikipedia/en/8/89/Pirates_of_the_Caribbean_-_The_Curse_of_the_Black_Pearl.png",
      type: "pirates"
    }

    this.movieSerivce.updateContentItem(testGameToUpdate).subscribe((movies: IContent[]) => {
      console.log("Testing updating a movie in the array -  Speed Racer should be replaced: ", movies);
    });
  }
}
