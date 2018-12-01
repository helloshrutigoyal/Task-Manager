import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController  } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { TaskdetailComponent } from './taskdetail.component';

describe('TaskdetailComponent', () => {
  let component: TaskdetailComponent;
  let fixture: ComponentFixture<TaskdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskdetailComponent ],
      imports : [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async(inject([ HttpTestingController, Router, ActivatedRoute, Location], (
    ctrl, router, route, loc ) =>{
      expect(component).toBeTruthy();
  })));
});
