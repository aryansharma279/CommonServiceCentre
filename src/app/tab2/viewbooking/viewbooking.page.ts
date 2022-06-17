import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalService } from '../../modal/modal.service';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.page.html',
  styleUrls: ['./viewbooking.page.scss'],
})
export class ViewbookingPage implements OnInit {
  statusList = ['pending', 'processing', 'completed', 'delivered']
  constructor (private modalCtrl: ModalController ) { }

  ngOnInit() {
  }
  back() {
    console.log("back-btn working");
    this.modalCtrl.dismiss();
 
  }
  
}
