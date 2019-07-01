import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { BookComponent } from './book/book.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { GenreComponent } from './genre/genre.component';
import { AuthorComponent } from './author/author.component';
import { ComboAuthorComponent } from './shared/module/combo-author/combo-author.component';
import { ComboGenreComponent } from './shared/module/combo-genre/combo-genre.component';
import { DatePipeComponent } from './shared/module/date-pipe/date-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    BookComponent,
    GenreComponent,
    AuthorComponent,
    CounterComponent,
    FetchDataComponent,
    ComboAuthorComponent,
    ComboGenreComponent,
    DatePipeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'livros', component: BookComponent },
      { path: 'generos', component: GenreComponent },
      { path: 'autores', component: AuthorComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
