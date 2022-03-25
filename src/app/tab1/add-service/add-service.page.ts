import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalService } from 'src/app/modal/modal.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.page.html',
  styleUrls: ['./add-service.page.scss'],
})
export class AddServicePage implements OnInit {

  constructor(
    private modalService: ModalService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }
 dismiss() {
   console.log("back-btn working");
   this.modalCtrl.dismiss();

 }
}
