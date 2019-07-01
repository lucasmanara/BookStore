import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import {MatDatepickerModule, MatInputModule,MatNativeDateModule} from '@angular/material';

import { BookService } from './book.service';
//import { AlertModalService } from 'src/app/shared/services/alert-modal.service';
import { Book } from './book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})

export class BookComponent implements OnInit {
  title = 'Book';
  //dtOptions: DataTables.Settings = {};
  books: Array<any>;

  childFabricante: string;

  constructor(
    public service: BookService,
    //private alertService: AlertModalService
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
    console.log(form)
    this.service.create(form).subscribe(
      success => {
        console.log('salvou');
        this.resetForm(form);
        this.service.refreshList();
        //this.alertService.showAlertSuccess('Cadastrado com sucesso.');
      },
      error => { }
    );
   }

   updateRecord(form) {
    console.log(form)
    this.service.put(form).subscribe(
      success => {
        this.resetForm(form);
        this.service.refreshList();
        //this.alertService.showAlertSuccess('Atualizado com sucesso.');
      },
      error => { }
    );
  }

  resetForm(form?: NgForm) {
    
    this.service.formData = {
      Id: null,
      title: '',
      genreid: 0,
      genre: {
        Id: null,
        name: '',
      },
      authorid: 0,
      author: {
        Id: null,
        name: '',
      },
      stock: null,
      publishdate: '2019-01-01'
    };
 }

 log (log) { console.log(log);}

    onSubmit(form: NgForm) {

     console.log(form);
     console.log(this.service.formData);

     if (this.service.formData.Id == 0 || this.service.formData.Id == 0) {
        this.service.formData.Id = null;
     }

     if (this.service.formData.Id == null) {
        const dataJson = {
          title: this.service.formData.title,
          genreid: this.service.formData.genreid,
          authorid: this.service.formData.authorid,
          publishDate: this.service.formData.publishdate,
          stock: this.service.formData.stock,
        };
        this.insertRecord(dataJson);
     } else {
        this.updateRecord(this.service.formData);
     };
     
    }


    

    

    

    //

    //onDelete(id: number) {

    //  if (confirm('Tem certeza que deseja deletar?')) {
    //    this.service.delete(id).subscribe(
    //      success => {
    //        this.service.refreshList();
    //        this.alertService.showAlertSuccess('Excluído com sucesso.');
    //      },
    //      error => { }
    //    );
    //  }
    //}

    //populateForm(emp: Book) {
    //  // $('#fabricante').val(emp.fabricante.idFabricante);
    //  // emp.ativo ? $('#ativo option:eq(1)').prop('selected', true) : $('#ativo option:eq(0)').prop('selected', true);
    //  // this.service.formData = Object.assign({}, emp);
    //}

    //getValueToComponentChild($event) {
    //  this.childFabricante = $event;
    //}
  }
