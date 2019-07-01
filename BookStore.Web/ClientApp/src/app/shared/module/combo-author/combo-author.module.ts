import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ComboAuthorComponent } from './combo-author.component';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule],
    declarations: [ComboAuthorComponent],
    exports: [ComboAuthorComponent]
})
export class ComboAuthorModule {}
