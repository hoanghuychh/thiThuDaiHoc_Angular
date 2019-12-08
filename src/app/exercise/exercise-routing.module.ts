import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarkComponent } from './mark/mark.component';


const routes: Routes = [
  {
    path: "exercise",
    children: 
    [
      {
        path: "mark",
        component : MarkComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciseRoutingModule { }
