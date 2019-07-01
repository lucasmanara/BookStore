import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthorService } from './author.service';
//import { AlertModalService } from 'src/app/shared/services/alert-modal.service';
import { Author } from './author.model';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})

export class AuthorComponent implements OnInit {
  title = 'Author';
  //dtOptions: DataTables.Settings = {};
  authors: Array<any>;

  childFabricante: string;

  constructor(
    public service: AuthorService,
    //private alertService: AlertModalService
  ) { }

  ngOnInit() {
    this.getGenres();
    this.resetForm();
    this.service.refreshList();
  }

  getGenres(): void {
    this.service.get().subscribe(authors => this.authors = authors);
  }

  insertRecord(form) {
    console.log(form)
    this.service.create(form).subscribe(
      success => {
        console.log('salvou');
        this.resetForm(form);
        this.service.get().subscribe(authors => this.authors = authors);
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
        this.service.get().subscribe(authors => this.authors = authors);
        //this.alertService.showAlertSuccess('Atualizado com sucesso.');
      },
      error => { }
    );
  }

  resetForm(form?: NgForm) {
    
    this.service.formData = {
      Id: null,
      name: ''
    };
 }

    onSubmit(form: NgForm) {

     console.log(this.service.formData);
    //  if (this.service.formData.author.Id == 0 || this.service.formData.author.Id == null) {
    //   this.alertService.showAlertWarning('Selecione um autor para cadastrar o livro.');
    //   return;
    // }

    // if (this.service.formData.genre.Id == 0 || this.service.formData.genre.Id == null) {
    //   this.alertService.showAlertWarning('Selecione um autor para cadastrar o livro.');
    //   return;
    // }

     if (this.service.formData.Id == 0 || this.service.formData.Id == 0) {
        this.service.formData.Id = null;
     }

     if (this.service.formData.Id == null) {
        const dataJson = {
          name: this.service.formData.name
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
