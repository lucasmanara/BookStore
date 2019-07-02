import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import {MatDatepickerModule, MatInputModule,MatNativeDateModule} from '@angular/material';

import { BookService } from './book.service';
//import { AlertModalService } from 'src/app/shared/services/alert-modal.service';
import { Book } from './book.model';
import * as $ from 'jquery';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})


export class BookComponent implements OnInit {
  title = 'Book';
  books: Array<any>;

  constructor(
    public service: BookService,
  ) { }

  ngOnInit() {
    this.getBooks();
    this.resetForm();
    this.service.refreshList();
  }

  getBooks(): void {
    this.service.get().subscribe(books => this.books = books);
  }

  insertRecord(form) {
    this.service.create(form).subscribe(
      success => {
        this.resetForm(form);
        this.service.get().subscribe(books => this.books = books);
      },
      error => { }
    );
   }

   updateRecord(form) {
    this.service.put(form).subscribe(
      success => {
        this.resetForm(form);
        this.service.get().subscribe(books => this.books = books);
      },
      error => { }
    );
  }

  resetForm(form?: NgForm) {
    this.service.formData = {
      id: null,
      title: '',
      genreid: 0,
      genre: {
        id: null,
        name: '',
      },
      authorid: 0,
      author: {
        id: null,
        name: '',
      },
      stock: null,
      publishdate: new Date().toLocaleString()
    };
 }

 onDelete(id: number) {
  if (confirm('Tem certeza que deseja deletar?')) {
    this.service.delete(id).subscribe(
      success => {
        this.service.get().subscribe(books => this.books = books);
      },
      error => { }
    );
  }
 }

    onSubmit(form: NgForm) {

     if (this.service.formData.id == 0 || this.service.formData.id == 0) {
        this.service.formData.id = null;
     }

     if (this.service.formData.id == null) {
        const dataJson = {
          title: this.service.formData.title,
          genreid: this.service.formData.genre.id,
          authorid: this.service.formData.author.id,
          publishDate: this.service.formData.publishdate,
          stock: this.service.formData.stock,
        };
        this.insertRecord(dataJson);
     } else {
        this.updateRecord(this.service.formData);
     };
     
    }

    populateForm(emp: Book) {
      this.service.formData = Object.assign({}, emp);
    }
  }
