import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IContent } from '../models/icontent';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyFavouriteMovieService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type':
        'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getContent(): Observable<IContent[]> {
    return this.http.get<IContent[]>("api/movies");
  }

  getContentItem(index: number): Observable<IContent> {
    console.warn("Got to get content item");
    return this.http.get<IContent>("api/movies/" + index);
  }

  addContentItem(item: IContent): Observable<IContent> {
    return this.http.post<IContent>("api/movies", item, this.httpOptions);
  }

  updateContentItem(item: IContent): Observable<IContent> {
    return this.http.put<IContent>("api/movies", item, this.httpOptions);
  }

  deleteContentItem(index: number): Observable<unknown> {
    return this.http.delete<IContent>("api/movies/" + index, this.httpOptions);
  }
}
