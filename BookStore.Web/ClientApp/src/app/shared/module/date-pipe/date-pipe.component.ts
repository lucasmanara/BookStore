import {Component} from '@angular/core';

@Component({
    selector: 'date-pipe',
    template: `<input  name="publishdate" [(ngModel)]="service.formData.publishdate" class="form-control" type="date" value="{{today | date}}" id="example-date-input">`
   })
   // Get the current date and time as a date-time value.
   export class DatePipeComponent {
     today: number = Date.now();
   }