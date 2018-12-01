import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './components/home/home.component';
import { TaskManagerService } from './services/taskmanager.service';
import { TasksStore } from './model/tasks.store';
import { TasksummaryComponent } from './components/tasksummary/tasksummary.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TaskpostponeComponent } from './components/taskpostpone/taskpostpone.component';
import { CommonHelperModule } from "../common/commonhelper.module";
import { TaskFeed } from "./realtime/task.feed";
import { TaskdetailComponent } from './components/taskdetail/taskdetail.component';
import { TaskmanagerRoutingModule } from "./taskmanager-routing.module";

@NgModule({
  declarations: [
    HomeComponent,
    TasksummaryComponent,
    TaskpostponeComponent,
    TaskdetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CommonHelperModule,
    TaskmanagerRoutingModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  exports: [
    HomeComponent
  ],
  providers : [
    TaskManagerService,
    TasksStore,
    TaskFeed
  ],
  entryComponents : [
    TaskpostponeComponent
  ]
})
export class TaskmanagerModule { }
