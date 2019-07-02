import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { GenreComponent } from './genre/genre.component';
import { AuthorComponent } from './author/author.component';
import { ComboAuthorComponent } from './shared/module/combo-author/combo-author.component';
import { ComboGenreComponent } from './shared/module/combo-genre/combo-genre.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    BookComponent,
    GenreComponent,
    AuthorComponent,
    ComboAuthorComponent,
    ComboGenreComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: BookComponent, pathMatch: 'full' },
      { path: 'livros', component: BookComponent },
      { path: 'generos', component: GenreComponent },
      { path: 'autores', component: AuthorComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
