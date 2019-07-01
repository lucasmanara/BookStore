import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ComboGenreComponent } from './combo-genre.component';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule],
    declarations: [ComboGenreComponent],
    exports: [ComboGenreComponent]
})
export class ComboGenreModule {}
