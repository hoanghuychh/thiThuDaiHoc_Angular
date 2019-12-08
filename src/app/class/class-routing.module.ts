import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateClassComponent } from './create-class/create-class.component';
import { JoinClassComponent } from './join-class/join-class.component';


const routes: Routes = [
  {
    path:"createClass",
    component:CreateClassComponent
  },
  {
    path:"joinClass",
    component:JoinClassComponent
  }
];

@NgModule({
  declarations:[
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ] 
})
export class ClassRoutingModule { }
