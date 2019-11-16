import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavTopComponent } from './nav-top/nav-top.component';
import { NavLeftComponent } from './nav-left/nav-left.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavTopComponent, NavLeftComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
  ],exports:[
    NavTopComponent,
    NavLeftComponent,
    MatSidenavModule
  ]
})
export class NavigationModule { }
