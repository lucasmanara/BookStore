import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Genre } from '../../../genre/genre.model';
import { GenreService } from '../../../genre/genre.service';

@Component({
  selector: 'app-combo-genre',
  templateUrl: './combo-genre.component.html',
  styleUrls: ['./combo-genre.component.scss']
})
export class ComboGenreComponent implements OnInit {
  @Input() comboValue: number = 0;
  @Output() comboValueChange = new EventEmitter<any>();
  genres: any;

  constructor(private service: GenreService) { }

  ngOnInit() {
    this.getGenres();
  }

  getGenres(): void {
    this.service.get().subscribe(genres => this.genres = genres);
  }

  getValueSelectedToComponent(genre) {
    this.comboValue = genre;
  }

}
