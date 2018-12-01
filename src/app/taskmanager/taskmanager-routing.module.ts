import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { TaskdetailComponent } from "./components/taskdetail/taskdetail.component";

const taskRoutes: Routes = [
  { path: 'upcoming', component: HomeComponent },
  { path: 'detail/:id', component: TaskdetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(taskRoutes)
  ],
  exports :[
    RouterModule
  ]
})
export class TaskmanagerRoutingModule { }
