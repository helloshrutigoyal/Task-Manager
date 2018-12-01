import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskpostponeComponent } from './taskpostpone.component';

describe('TaskpostponeComponent', () => {
  let component: TaskpostponeComponent;
  let fixture: ComponentFixture<TaskpostponeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskpostponeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskpostponeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
