import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Author } from '../../../author/author.model';
import { AuthorService } from '../../../author/author.service';

@Component({
  selector: 'app-combo-author',
  templateUrl: './combo-author.component.html',
  styleUrls: ['./combo-author.component.scss']
})
export class ComboAuthorComponent implements OnInit {
  @Input() comboValue: number = 0;
  @Output() comboValueChange = new EventEmitter<any>();
  authors: any;

  constructor(private service: AuthorService) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors(): void {
    this.service.get().subscribe(authors => this.authors = authors);
  }

  getValueSelectedToComponent(author) {
    this.comboValue = author;
  }

}
