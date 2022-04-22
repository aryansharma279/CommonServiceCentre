import { Component } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { AddServicePage } from './add-service/add-service.page';
import { DataService} from '../services/data.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  allServices: any[];
  constructor(
    private modalService: ModalService,
    private dataService : DataService,
  
  ) {}
  addService() {
    console.log(" Btn Click working");
    this.modalService.presentModal(
      AddServicePage,
      {
        type: 'add',
        service: null,
      },
    );
  }
  ngOnInit() {
    this.getAllServices();
    
  }
  getAllServices() {
    this.dataService.getAllServices().on('value', (snapshot) => {
      this.allServices = this.dataService.extractServices(snapshot);
    });

    console.log('get all Services', this.allServices);
  }
  editService(service) {
    console.log("Service Selected",service);
    this.modalService.presentModal(
      AddServicePage,
      {
        type: 'edit',
        service: service,
        
      },
    );
  }
  deleteService(name) {
    this.dataService.deleteService(name).then((response) => {
      console.log('Service removed')
    })
}

}
