import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import Movie from '../models/Movie';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularMovies: Array<Movie>;
  inTheaterMovies: Array<Movie>;
  kidsMovies: Array<Movie>;
  dramaMovies: Array<Movie>;
  message = null;
  searchRes : any;
  isSearch: boolean;

 

  constructor(private moviesService: MovieService) { }
    
  search(myQuery){
    this.moviesService.findMovie(myQuery).subscribe(
      data =>{
        this.searchRes = data;
        console.log(this.searchRes.results);
        this.isSearch = true;
      }
    )
  }


  ngOnInit() {
    this.moviesService.getPopularMovies().subscribe(data=>{
      this.popularMovies = data['results'].slice(0,6);
    });
    this.moviesService.getInTheaterMovies().subscribe(
      data  => {
        this.inTheaterMovies = data['results'].slice(6,12);
      });
    this.moviesService.getKidsMovie().subscribe(
      data => {
        this.kidsMovies = data['results'].slice(6,12);
        console.log(this.kidsMovies);
      }
      );
    this.moviesService.getDramaMovies().subscribe(
      data =>{
        this.dramaMovies = data['results'].slice(0,6)
      });
  } 

  fromChild(event) {
    console.log(event);
    this.message = event;
  }

}
