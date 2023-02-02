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

}
