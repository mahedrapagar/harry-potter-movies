import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-movie-board',
  templateUrl: './movie-board.component.html',
  styleUrls: ['./movie-board.component.css']
})
export class MovieBoardComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = []; // Nuovo array per i film filtrati
  titleFilter: string = '';
  releaseYearFilter: string = '';
  loading: boolean = true;

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {

    this.loading = true;


    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies;
      this.applyFilters();
      this.loading = false;
    });
  }

  loadMovies() {
    this.movieService.getMovies().pipe(tap(s => console.log(s))).subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }

  navigateToDetails(movieId: number) {
    this.router.navigate(['/movies', movieId]);
  }

  applyFilters(): void {
    // Filtra i film in base ai criteri
    this.filteredMovies = this.movies.filter((movie: Movie) =>
      movie?.title?.toLowerCase().includes(this.titleFilter.toLowerCase()) &&
      this.filterByYear(movie?.release_date)
    );
  }

  filterByYear(releaseDate?: string): boolean {
    if (!this.releaseYearFilter || !releaseDate) {
      return true; // Se l'anno di filtro è vuoto, restituisci true per mantenere il film nel risultato
    }

    const yearFromReleaseDate = new Date(releaseDate).getFullYear().toString();
    return yearFromReleaseDate.includes(this.releaseYearFilter);
  }


}



