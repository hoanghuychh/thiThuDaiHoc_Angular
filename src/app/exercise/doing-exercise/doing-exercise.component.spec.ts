import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoingExerciseComponent } from './doing-exercise.component';

describe('DoingExerciseComponent', () => {
  let component: DoingExerciseComponent;
  let fixture: ComponentFixture<DoingExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoingExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoingExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
