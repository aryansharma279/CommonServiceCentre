import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalService } from '../../modal/modal.service';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';


@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.page.html',
  styleUrls: ['./add-service.page.scss'],
})
export class AddServicePage implements OnInit {
  addForm: any;

  showField = false;
  services =  [
    {
      name: 'Aadhar Card',
      handler: 'adharcard'
    },
    {
      name: 'Pan Card',
      handler: 'pancard'
    },
    {
      name: 'Voter Card',
      handler: 'votercard'
    }
  ]

  constructor(
    
    private fb: FormBuilder,
    private modalService: ModalService,
    private modalCtrl: ModalController
  ) { }


  ngOnInit() {
    // make the form here
    this.generateForm();

  }

  fieldOperation(type, value :any) {
    if(type === 'show') {
      this.showField = true;
    }

    if(type === 'add') {
     
      this.services.push({
        name: value,
        handler: value
      })

      this.showField = false;
    }
  }

  generateForm() {
    this.addForm = this.fb.group({
      name: [null, Validators.required],
      // phoneNo: [null],
      description: [null, Validators.required],
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
   documents: formValues.documents,
   charges: formValues.charges,
   
 };

 console.log('payload for adding the Service', payload);
}
}
