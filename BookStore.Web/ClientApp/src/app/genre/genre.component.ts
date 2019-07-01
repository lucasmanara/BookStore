import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import {  } from '@types/jquery';
//import * as $ from 'jquery';

import { GenreService } from './genre.service';
//import { AlertModalService } from 'src/app/shared/services/alert-modal.service';
import { Genre } from './genre.model';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})

export class GenreComponent implements OnInit {
  title = 'Genre';
  //dtOptions: DataTables.Settings = {};
  genres: Array<any>;

  childFabricante: string;

  constructor(
    public service: GenreService,
    //private alertService: AlertModalService
  ) { }

  ngOnInit() {
    this.getGenres();
    this.resetForm();
    this.service.refreshList();
  }

  getGenres(): void {
    this.service.get().subscribe(genres => this.genres = genres);
  }

  insertRecord(form) {
    console.log(form)
    this.service.create(form).subscribe(
      success => {
        console.log('salvou');
        this.resetForm(form);
        //this.service.refreshList()
        this.service.get().subscribe(genres => this.genres = genres);
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
        // this.service.refreshList();
        this.service.get().subscribe(genres => this.genres = genres);
        //this.alertService.showAlertSuccess('Atualizado com sucesso.');
      },
      error => { }
    );
  }

  onDelete(id: number) {
    if (confirm('Tem certeza que deseja deletar?')) {
      this.service.delete(id).subscribe(
        success => {
          this.service.get().subscribe(genres => this.genres = genres);
          //  this.alertService.showAlertSuccess('Excluído com sucesso.');
        },
        error => { }
      );
    }
   }

  resetForm(form?: NgForm) {
    
    this.service.formData = {
      id: null,
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

     if (this.service.formData.id == 0 || this.service.formData.id == 0) {
        this.service.formData.id = null;
     }

     if (this.service.formData.id == null) {
        const dataJson = {
          name: this.service.formData.name
        };
        
       console.log('POST')
        //this.insertRecord(dataJson);
     } else {
       console.log(this.service.formData)
        this.updateRecord(this.service.formData);
     };
     
    }

    populateForm(emp: Genre) {
      this.service.formData = Object.assign({}, emp);
    }

    //getValueToComponentChild($event) {
    //  this.childFabricante = $event;
    //}
  }
