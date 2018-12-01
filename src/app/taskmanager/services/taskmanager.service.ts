import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponseBase } from '@angular/common/http';
import { TaskManagerConstants } from '../utils/taskmanager.constants';
import { TaskManagerTranslator } from './translators/taskmanager.translator';
import { Task } from '../model/domain/task.model';
import { TasksStore } from '../model/tasks.store';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  constructor( private http : HttpClient ) { 

  }

  /**
   * loadTasks
   */
  public loadTasks() : Observable<Task[]>
  {
    return this.http
                .get( TaskManagerConstants.LOAD_TASKS_URL )
                .pipe(map( result => {
                  return TaskManagerTranslator.deserializeTasks(result);
                }));
  }

  public postponeTask( task : Task ) : Observable<any>
  {
    let uuid : string = task.id; 
    return this.http
                .post(`http://localhost:8080/task/${uuid}/postpone`, task.postponedTime)
                .pipe(map( result => {
                  return result;
                }));
  }

  public resolveTask( task : Task ) : Observable<any>
  {
    let uuid : string = task.id; 
    return this.http
                .post(`http://localhost:8080/task/${uuid}/resolve`, {})
                .pipe(map( result => {
                  return result;
                }));
  }

  public getTaskById(id : string) : Observable<any>
  {
    return this.http
                .get(`http://localhost:8080/task/${id}`)
                .pipe(map( result => {
                  return TaskManagerTranslator.deserializeTask(result);
                }));
  }
}
