import { IContent } from "./icontent";

export class ContentList {
    private _movies: IContent[];
    constructor() {
        this._movies = [];
    }

    get movies(): IContent[] {
        return this._movies
    }

    addContent(newMovie: IContent) {
        this._movies.push(newMovie);
    }

    arrayLength(): number {
        return this._movies.length;
    }

    toString(index: number): string {
        const movie: IContent = this._movies[index];
        let prettyHtmlOutput = `
            <h2>${movie.title}</h2>
            <img src="${movie.imgSrc}">
            <p>${movie.description}</p>
            <div class="meta-data">
                <span class="author">${movie.author}</span>
                <span class="type">${movie.type}</span>
            </div>`;
        
        if (movie.tags) {
            prettyHtmlOutput += '<div class="tags">';

            movie.tags.forEach((tag) => {
                prettyHtmlOutput += `<span>${tag}</span>`;
            });

            prettyHtmlOutput += "</div>";
        }

        return prettyHtmlOutput;
    }
}
