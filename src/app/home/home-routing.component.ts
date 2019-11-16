import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { TrangchuComponent } from './trangchu/trangchu.component';


const routes: Routes = [
    {
        path:"home",
        component:TrangchuComponent
    },
    {
        path:"",
        pathMatch:"full",
        redirectTo:"home"
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
