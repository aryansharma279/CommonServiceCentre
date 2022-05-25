import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalService } from '../../modal/modal.service';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { DataService } from '../../services/data.service';
import { NavParams } from '@ionic/angular';


@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.page.html',
  styleUrls: ['./add-service.page.scss'],
})
export class AddServicePage implements OnInit {
  addForm: any;
  operationType: any;
  service: any;
  data: any;
  showField = false;
  allServices =  [
   
      'Aadhar Card',
  

     'Pan Card',
      
   
   
      'Voter Card',
    
  
  ]
  allDocuments: any;

  constructor(
    
    private fb: FormBuilder,
    private modalService: ModalService,
    private modalCtrl: ModalController,
    private dataService: DataService,
    private navParams: NavParams
  ) { }


  ngOnInit() {
    // make the form here
    this.generateForm();
    this.service = this.navParams.get('service');
    this.operationType = this.navParams.get('type');
    this.switchForm();
    console.log("here", this.service);
    console.log("op-type",this.operationType);
  
   

  }
  switchForm() {
    console.log("op",this.operationType);
    
  if (this.operationType === 'add') {
    this.addForm = this.fb.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      time: [null, Validators.required],
      documents: [null, Validators.required],
      charges: [null, Number],
    });
  }
  if (this.operationType === 'edit') {
    console.log("here", this.service);
    this.allDocuments = this.service.documents;
    this.allServices = this.service.documents;
    this.addForm = this.fb.group({
      name: [this.service.name],
      description: [this.service.description, Validators.required],
      time: [this.service.time, Validators.required],
      documents: [this.service.documents, Validators.required],
      charges: [this.service.charges,Number],
    });
  }
}
saveService() {
  if (this.operationType === 'add') {
   this.addService(this.addForm);
  }

  if (this.operationType === 'edit') {
    this.editService();
  }
}     
  
  fieldOperation(type, value :any) {
    if(type === 'show') {
      this.showField = true;
    }

    if(type === 'add') {
     
      this.allServices.push(value)

      this.showField = false;
    }
  }

  generateForm() {
    this.addForm = this.fb.group({
      name: [null, Validators.required],
      // phoneNo: [null],
      description: [null, Validators.required],
      time: [null, Validators.required],
      documents: [null, Validators.required],
      charges: [null, Validators.required],


      

    });
  }
 dismiss() {
   console.log("back-btn working");
   this.modalCtrl.dismiss();

 }
 addService(formValues :any){

  console.log('form values', formValues);
  //  const formValues = this.addForm.value;



 const payload = {
   name: formValues.name,
   description: formValues.description,
   time: formValues.time,
   documents: formValues.documents,
   charges: formValues.charges,
   
 };

 console.log('payload for adding the Service', payload);
 const result = this.dataService.createService(payload);
 this.modalCtrl.dismiss();
}
editService() {
  const formValues = this.addForm.value;
  console.log('add Service payload', formValues);

  const payload = formValues;

  

  this.dataService
    .editService(payload)
    .then((response) => {
      console.log('response of update result', response);
      this.dismiss();
    })
    .catch((error) => {
      console.log('response of error result', error);
    });
}


getDocuments() {
  console.log('add form ', this.addForm);
  const form = this.addForm.value;

  console.log('form documents', form.documents);



  this.allDocuments = form.documents;




}
}
