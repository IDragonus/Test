import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';


const Material = [
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  FormsModule,
  MatTableModule
];

@NgModule({
  imports: [
    CommonModule, Material
  ],
  exports: [Material],
  declarations: []
})
export class MaterialModule { }
