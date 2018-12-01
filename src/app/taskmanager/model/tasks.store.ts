import { Task } from "./domain/task.model";
import { TaskStatus } from '../utils/taskstatus.enum';
import { Injectable } from "@angular/core";
import * as _ from 'lodash';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class TasksStore
{
    private _tasks: Task[]; 

    public get tasks() : Task[]
    {
        return this._tasks;
    }

    public set tasks(value : Task[])
    {
        this._tasks = value;
    }

    public getUpcomingTasks() : Task[]
    {
        let filteredTasks : Task[] = [];
        filteredTasks = _.filter(this.tasks, 
                                 (value : Task) => value.status == TaskStatus.NEW );

        return filteredTasks;
    }

    public getTaskById( id : string ) : Task
    {
        return <Task>(_.find(this.tasks, (task : Task) => task.id == id));
    }

    public updateTask(updatedTask : Task) : void
    {
        let task : Task = this.getTaskById(updatedTask.id);
        if(task)
        {
          task.status = updatedTask.status;
        }
    }
}