import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController  } from "@angular/common/http/testing";

import { TaskManagerService } from './taskmanager.service';
import { Task } from "../model/domain/task.model";

describe('TaskmanagerService', () => {
  let injector: TestBed;
  let service: TaskManagerService;
  let httpMock: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        TaskManagerService,
      ]
  })
);

  it('service should be created', async(inject([HttpTestingController, TaskManagerService], 
    (controller : HttpTestingController, taskService : TaskManagerService ) => {
        expect(taskService).toBeDefined();
  })));

  it('should load tasks', async(inject([HttpTestingController, TaskManagerService], 
    (controller : HttpTestingController, taskService : TaskManagerService ) => {
        let tasks : any = [
          { uuid: "1", title : "Test1", description : "Desc1", status : "NEW", duedate:"1543764186424"},
          { uuid: "2", title : "Test2", description : "Desc2", status : "RESOLVED", duedate:"1543764186424"}
        ];

        taskService.loadTasks().subscribe((result : any) => {
          expect(result).toBeTruthy();
          expect(result.length).toEqual(3);
        })
  })));

});
