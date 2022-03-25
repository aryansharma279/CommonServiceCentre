import { Component } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { AddServicePage } from './add-service/add-service.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private modalService: ModalService
  ) {}
  addService() {
    console.log(" Btn Click working");
    this.modalService.presentModal(AddServicePage)
  }
}
