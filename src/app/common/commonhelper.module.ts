import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ModalModule} from 'ngx-bootstrap/modal';

import { ModalPopupHelper } from "./modal/ModalPopupHelper";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  providers : [
    ModalPopupHelper
  ]
})
export class CommonHelperModule { }
