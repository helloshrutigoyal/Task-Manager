import { Injectable, ComponentRef } from '@angular/core';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';

@Injectable({
    providedIn: 'root'
})
export class ModalPopupHelper
{
    constructor(private modalService : BsModalService)
    {

    }

    public showModal(component : any, initialState? : any ) : BsModalRef
    {
        return this.modalService.show(component, {initialState});
    }
}