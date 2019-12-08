import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavClassRoutingModule } from './nav-class-routing.module';
import { HomeworkComponent } from './homework/homework.component';
import { MemberComponent } from './member/member.component';
import { RankComponent } from './rank/rank.component';
import { ParentComponent } from './parent/parent.component';


@NgModule({
  declarations: [HomeworkComponent, MemberComponent, RankComponent, ParentComponent],
  imports: [
    CommonModule,
    NavClassRoutingModule
  ]
})
export class NavClassModule { }
