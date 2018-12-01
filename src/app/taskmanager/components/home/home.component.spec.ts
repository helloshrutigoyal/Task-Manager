import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController  } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

import { HomeComponent } from './home.component';
import { TasksummaryComponent } from '../tasksummary/tasksummary.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
         HomeComponent,
         TasksummaryComponent
        ],
        imports: [
          HttpClientTestingModule,
          RouterTestingModule
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async(inject([HttpTestingController, Router], 
    (controller : HttpTestingController, router : Router ) => {
        expect(component).toBeTruthy();
  })));

  it('should contain app-tasksumary', () => {
    const instance = fixture.debugElement.nativeElement;
    expect(instance.querySelector('app-tasksummary')).toBeTruthy();
  })
});
