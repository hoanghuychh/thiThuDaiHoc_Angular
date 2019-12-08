import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassRoutingModule } from './class-routing.module';
import { CreateClassComponent } from './create-class/create-class.component';
import { JoinClassComponent } from './join-class/join-class.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';
@NgModule({
  declarations: [CreateClassComponent, JoinClassComponent],
  imports: [
    CommonModule,
    ClassRoutingModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  exports:[
    CreateClassComponent,
    JoinClassComponent,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,

  ]
})
export class ClassModule { }
