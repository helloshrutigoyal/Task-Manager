import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Task } from "../../model/domain/task.model";
import { TaskManagerService } from "../../services/taskmanager.service";
import { Location } from "@angular/common";
import { NameValueItem } from "../../../common/model/NameValueItem";
import { TaskManagerConstants } from "../../utils/taskmanager.constants";
import { TaskStatus } from "../../utils/taskstatus.enum";
import { TasksStore } from "../../model/tasks.store";

@Component({
  selector: 'app-taskdetail',
  templateUrl: './taskdetail.component.html',
  styleUrls: ['./taskdetail.component.css']
})
export class TaskdetailComponent implements OnInit
{
  taskId : string;
  task : Task;
  postponeTime : NameValueItem[];
  selectedTime : NameValueItem;
  label : string = 'Time (in minutes)';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private taskService : TaskManagerService,
              private location : Location,
              private taskStore : TasksStore
              ) 
  {

  }

  ngOnInit() {
    this.postponeTime = TaskManagerConstants.POSTPONE_TIME;

    let taskId : string = "";
    this.route.paramMap.subscribe((param) => {
      taskId = param.get('id');
    });

    if(taskId)
    {
      this.taskId = taskId;
      this.getTask();
    }
  }

  private getTask()
  {
    this.taskService.getTaskById(this.taskId).subscribe(
      (result) => {
        this.task = result;
      });
  }

  goBack()
  {
    this.location.back();
  }

  onItemSelect(time)
  {
    this.selectedTime = time;
    this.label = this.selectedTime.label;
  }

  doPostpone()
  {
    if(this.selectedTime)
    {
      let newTask : Task = this.task.clone();
      newTask.status = TaskStatus.POSTPONED;
      newTask.postponedTime = this.selectedTime.value;
      this.taskService.postponeTask(newTask).subscribe(
        ( response ) => {
          if(response)
          this.taskStore.updateTask(newTask);
          this.getTask();
        },
        (error) => {
          console.log("Cannot postpone task")
        }
      );
    }
  }

  doResolve()
  {
    let newTask : Task = this.task.clone();
    newTask.status = TaskStatus.RESOLVED;
    this.taskService.resolveTask(newTask).subscribe(
      ( response ) => {
        if(response)
        this.taskStore.updateTask(newTask);
        this.getTask();
      },
      (error) => {
        console.log("Cannot postpone task")
      }
    );
  }
}
