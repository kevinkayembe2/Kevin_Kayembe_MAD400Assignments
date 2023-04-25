import { IContent } from "../models/icontent";

export const MOVIES: IContent[] = [{
    id: 0,
      title: "Speed Racer",
      description: "Futuristic Motorsport Racing",
      author: "The Wachowskis",
      imgSrc: "https://upload.wikimedia.org/wikipedia/en/8/82/Speed_racer_ver5_xlg.jpg",
      type: "Racing",
      tags: ["Speed Racer", "Racer X"]
    },
    {
      id: 1,
      title: "Scott Pilgrim Vs. The World",
      description: "A boy has to fight his girlfriend's 7 evil exes.",
      author: "Edgar Wright",
      imgSrc: "https://upload.wikimedia.org/wikipedia/en/1/14/Scott_Pilgrim_vs._the_World_teaser.jpg",
      type: "Fighting",
      tags: ["Scott Pilgrim", "Ramona Flowers", "Evil Exes"]
    },
    {
      id: 2,
      title: "Sonic the Hedgehog",
      description: "",
      author: "Jeff Fowler",
      imgSrc: "https://upload.wikimedia.org/wikipedia/en/4/45/Sonic_the_Hedgehog_film_poster.jpg",
      type: "Adventure",
      tags: ["Sonic", "Sonic (2020)", "Dr. Eggman"]
    },
    {
      id: 3,
      title: "Paul Blart: Mall Cop",
      description: "Three crooks, two donuts, one bumbling mall guard.",
      author: "Steve Carr",
      imgSrc: "https://upload.wikimedia.org/wikipedia/en/9/95/Paul_blart_mall_cop_film.jpg",
      type: "Comedy",
      tags: ["Paul Blart", "Scooter Patrol"]
}];

export const INVALIDMOVIE: IContent = {
    id: -1,
    title: "",
    description: "",
    author: "",
    imgSrc: "",
    type: "",
    tags: []
}