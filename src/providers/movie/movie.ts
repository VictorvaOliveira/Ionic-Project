import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  // path = "http://api.themoviedb.org/3/";
  
  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }
  getLastesMovies(){
    return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=c941491c5a2acd9e38b7ff0292be67da&language=en-US"); 
  }

}
