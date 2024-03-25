import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input("movie") movie: Movie | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  navigateToDetails(movieId?: number) {
    if(movieId){
      this.router.navigate(['/movies', movieId]);
    }
  }

}



