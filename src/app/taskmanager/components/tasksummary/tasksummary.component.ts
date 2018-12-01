import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../../model/domain/task.model';
import { TaskStatus } from '../../utils/taskstatus.enum';
import { ModalPopupHelper } from "../../../common/modal/ModalPopupHelper";
import { TaskpostponeComponent } from "../taskpostpone/taskpostpone.component";
import { BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: 'app-tasksummary',
  templateUrl: './tasksummary.component.html',
  styleUrls: ['./tasksummary.component.css']
})
export class TasksummaryComponent implements OnInit {

  constructor(private modalHelper : ModalPopupHelper) {

  }

  @Input()
  public task : Task;

  @Output()
  public statusChange = new EventEmitter();

  @Output()
  public headerClick =  new EventEmitter();

  ngOnInit() {
  }

  doPostpone()
  {
    let modalRef : BsModalRef = this.modalHelper.showModal(TaskpostponeComponent, { task : this.task});
    modalRef.content.onClose.subscribe((value : number) => {
      if(value != -1)
      {
        let newTask : Task = new Task();
        newTask.id = this.task.id;
        newTask.status = TaskStatus.POSTPONED;
        newTask.postponedTime = value;
        this.statusChange.emit(newTask);
      }
    })
  }

  doResolve()
  {
    let newTask : Task = new Task();
    newTask.id = this.task.id;
    newTask.status = TaskStatus.RESOLVED;
    this.statusChange.emit(newTask);
  }

  onTitleClick()
  {
      this.headerClick.emit(this.task);
  }
}
