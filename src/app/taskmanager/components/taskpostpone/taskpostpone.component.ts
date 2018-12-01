import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject} from "rxjs";
import { Task } from "../../model/domain/task.model";
import { NameValueItem } from "../../../common/model/NameValueItem";
import { TaskManagerConstants } from "../../utils/taskmanager.constants";

@Component({
  selector: 'app-taskpostpone',
  templateUrl: './taskpostpone.component.html',
  styleUrls: ['./taskpostpone.component.css']
})
export class TaskpostponeComponent implements OnInit {
  onClose : Subject<number>;

  task : Task;
  postponeTime : NameValueItem[];
  selectedTime : NameValueItem;
  label : string = 'Time (in minutes)';

  constructor(public modalRef: BsModalRef) {

   }

  ngOnInit() {
    this.onClose = new Subject();
    this.postponeTime = TaskManagerConstants.POSTPONE_TIME;
  }

  onItemSelect(time)
  {
    this.selectedTime = time;
    this.label = this.selectedTime.label;
  }

  onSave()
  {
    let time : number = this.selectedTime ? this.selectedTime.value :  -1;
    this.onClose.next(time);
    this.modalRef.hide();
  }

  onCancel()
  {
    this.modalRef.hide();
    this.onClose.next(-1);
  }
}
