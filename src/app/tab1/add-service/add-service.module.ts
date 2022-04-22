import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { IonicModule } from '@ionic/angular';

import { AddServicePageRoutingModule } from './add-service-routing.module';

import { AddServicePage } from './add-service.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AddServicePageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [AddServicePage]
})
export class AddServicePageModule {}
