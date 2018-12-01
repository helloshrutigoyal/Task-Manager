import { Component, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import { TaskManagerService } from '../../services/taskmanager.service';
import { TasksStore } from '../../model/tasks.store';
import { Task } from '../../model/domain/task.model';
import { TaskManagerUtil } from '../../utils/taskmanager.utils';
import { TaskStatus } from '../../utils/taskstatus.enum';
import { Observable } from "rxjs";
import { TaskFeed } from "../../realtime/task.feed";
import { Router } from "@angular/router";

@Component({
  selector: 'taskmanager-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {
  public tasks : Task[];
  public loading : boolean = false;

  constructor( private tasksService: TaskManagerService,
                private tasksStore : TasksStore,
                private taskFeed : TaskFeed,
                private router : Router)
  {

  }

  ngOnInit()  {
    this.loading = true;
    this.tasksService.loadTasks().subscribe(
      (tsk: Task[]) => {
        this.tasksStore.tasks = tsk;
        this.showTasks();
        this.loading = false;
      },
      (error: any) => {
        console.log("Unable to fetch tasks");
        this.loading = false;
      }
    );
    this.taskFeed.start();
  }

  ngOnChanges()
  {
    console.log(this.tasks);
  }

  statusChangeHandler(data : Task)
  {
    if(data.status == TaskStatus.POSTPONED)
    {
      this.tasksService.postponeTask(data).subscribe(
        ( response ) => {
          if(response)
          this.tasksStore.updateTask(data);
          this.showTasks();
        },
        (error) => {
          console.log("Cannot postpone task")
        }
      );
    }
    else if(data.status == TaskStatus.RESOLVED){
      this.tasksService.resolveTask(data).subscribe(
        ( response ) => {
          if(response)
          this.tasksStore.updateTask(data);
          this.showTasks();
        },
        (error) => {
          console.log("Cannot postpone task")
        }
      );
    }
    
  }

  headerClickHandler(data : Task)
  {
    let taskId : string = data.id;
    this.router.navigate(['/detail', taskId]);
  }

  private showTasks() : void
  {
    this.tasks = this.tasksStore.getUpcomingTasks();
    this.tasks = TaskManagerUtil.sortTasks(this.tasks);
  }

}
