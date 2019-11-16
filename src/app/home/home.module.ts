import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { HomeRoutingModule } from './home-routing.component';

import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [TrangchuComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule
  ]
})
export class HomeModule { }
