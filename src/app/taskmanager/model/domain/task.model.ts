import { TaskStatus } from "../../utils/taskstatus.enum";
import * as moment from 'moment';

export class Task
{
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    createdAt : Date;

    postponedAt : Date;
    postponedTime : number;
    resolvedAt : Date;
    updatedAt : Date;
    priority: number;
    status: TaskStatus;

    private formatDate(date : Date) : string
    {
        return moment(date).format('DD-MM-YYYY HH:mm:ss');
    }

    public get formattedDueDate() : string
    {
        return this.formatDate(this.dueDate);
    }

    public get formattedPostponedDate() : string
    {
        return this.formatDate(this.postponedAt);
    }

    public get formattedResolvedDate() : string
    {
        return this.formatDate(this.resolvedAt);
    }

    public get formattedCreatedDate() : string
    {
        return this.formatDate(this.createdAt);
    }

    public get formattedUpdatedDate() : string
    {
        return this.formatDate(this.updatedAt);
    }

    public get formattedTaskStatus() : string
    {
        if(this.isNew) return "New";
        else if(this.isPostponed) return "Postponed";
        else if(this.isResolved) return "Resolved";
    }

    public get isNew() : boolean
    {
        return this.status == TaskStatus.NEW;
    }

    public get isPostponed() : boolean
    {
        return this.status == TaskStatus.POSTPONED;
    }

    public get isResolved() : boolean
    {
        return this.status == TaskStatus.RESOLVED;
    }

    public clone() : Task
    {
       let task : Task = Object.assign({}, this);

        return task;
    }
}