import { Task } from "../../model/domain/task.model";
import { TaskStatus } from "../../utils/taskstatus.enum";
import {TaskManagerConstants} from "../../utils/taskmanager.constants";
export class TaskManagerTranslator
{
    public static deserializeTasks( rawTasks: any ): Task[]
    {
        let tasks : Task[] = [];
        for(let i: number = 0, n : number = rawTasks.length; i < n; i++)
        {
            let task : Task = new Task();
            let rawTask : any = rawTasks[i];
            task = TaskManagerTranslator.deserializeTask(rawTask);
            tasks.push(task);
        }

        return tasks;
    }

    public static deserializeTask( rawTask: any ): Task
    {
        let task : Task = new Task();
        for(let prop in rawTask)
        {
            let fieldType : number = TaskManagerConstants.FIELD_TYPE_MAP[prop];
            let mappedProp : string =  TaskManagerConstants.FIELD_MAP[prop];
            if(fieldType && mappedProp)
            {
                switch(fieldType)
                {
                    case 1:
                        task[mappedProp] = rawTask[prop] ? rawTask[prop] : "";
                        break;
                    case 2 :
                        task[mappedProp] = rawTask[prop] ? new Date(rawTask[prop]) : null;
                        break;
                    case 3 :
                        task[mappedProp] = TaskStatus[rawTask[prop]] ? TaskStatus[rawTask[prop]] : "";
                        break;
                    case 4 :
                        task[mappedProp] = rawTask[prop] ? parseInt(rawTask[prop]) : -1;
                }
            }
        }

        return task;
    }
}