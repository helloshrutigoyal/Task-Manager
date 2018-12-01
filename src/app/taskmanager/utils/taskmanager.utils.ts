import { Task } from "../model/domain/task.model";
import { TaskStatus } from "../utils/taskstatus.enum";
import * as _ from 'lodash';

export class TaskManagerUtil
{
    public static sortTasks(tasks : Task[]) : Task[]
    {
        let sortedTasks : Task[] = [];
        sortedTasks = _.orderBy(tasks,
                    [
                        (value : Task) => value.dueDate ? value.dueDate.getTime() : null,
                        (value:Task) => value.priority], 
                    ['asc', 'desc']);

        return sortedTasks;
    }
}
