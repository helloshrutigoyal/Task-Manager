import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TaskmanagerModule } from "./taskmanager/taskmanager.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskmanagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
