import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseRoutingModule } from './exercise-routing.module';
import { DoingExerciseComponent } from './doing-exercise/doing-exercise.component';
import { CreateExerciseComponent } from './create-exercise/create-exercise.component';
import { MarkComponent } from './mark/mark.component';


@NgModule({
  declarations: [DoingExerciseComponent, CreateExerciseComponent, MarkComponent],
  imports: [
    CommonModule,
    ExerciseRoutingModule
  ]
})
export class ExerciseModule { }
