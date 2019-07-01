import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookComponent } from './book.component';
import {CalendarModule} from 'primeng/calendar';



@NgModule({
  declarations: [BookComponent],
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BookModule { }
