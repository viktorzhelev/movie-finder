import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Movie from '../models/Movie';

const BASE_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = '?api_key=f243399e889981c16c48ab7dace73c0e';
const THEATER = 'https://api.themoviedb.org/3/movie/now_playing';
const KIDS = 'https://api.themoviedb.org/3/discover/movie?api_key=f243399e889981c16c48ab7dace73c0e&certification_country=US&certification.lte=G&sort_by=popularity.desc'
const DRAMA = 'https://api.themoviedb.org/3/discover/movie?api_key=f243399e889981c16c48ab7dace73c0e&with_genres=18&primary_release_year=2014'
const REQUEST = 'https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }
  getPopularMovies() : Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + '/popular' + API_KEY);

  }
  getInTheaterMovies() : Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(THEATER + API_KEY);
  }

  getKidsMovie() : Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(KIDS);
  }

  getDramaMovies() : Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(DRAMA);
  }

  getMovie(id) {
    return this.http.get(BASE_URL + '/' +id + API_KEY);
  }

  findMovie(myQuery) {
    return this.http.get("https://api.themoviedb.org/3/search/movie?api_key=f243399e889981c16c48ab7dace73c0e&query=" + myQuery.search);
  }
}