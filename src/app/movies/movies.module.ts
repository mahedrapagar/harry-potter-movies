import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './services/movie.service';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { FormsModule } from '@angular/forms';
import { MovieBoardComponent } from './components/movie-board/movie-board.component';
import { BudgetPipe } from '../shared/pipes/budget.pipe';
import { DurationPipe } from '../shared/pipes/duration.pipe';

@NgModule({
    declarations: [MovieComponent, MovieDetailsComponent, MovieBoardComponent, DurationPipe, BudgetPipe],
    providers: [MovieService],
    imports: [
        CommonModule, MoviesRoutingModule, HttpClientModule, FormsModule
    ]
})
export class MoviesModule { }
