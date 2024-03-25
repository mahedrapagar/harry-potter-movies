import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { MovieDetails } from '../models/movie-details';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = '/movies'; // Adjust the endpoint if needed

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  getMovieDetails(id: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(this.apiUrl + "/" + id);

  }
}
