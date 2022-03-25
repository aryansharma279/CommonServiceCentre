import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ModalService {


  constructor(public modalController: ModalController) { }

  async presentModal(modalPage) {
    
    const modal = await this.modalController.create({
      component: modalPage});

    // modal.onDidDismiss()
    
      return await modal.present();
  }

  

  


}
