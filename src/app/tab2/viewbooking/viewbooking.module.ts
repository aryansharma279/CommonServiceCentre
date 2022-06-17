import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewbookingPageRoutingModule } from './viewbooking-routing.module';

import { ViewbookingPage } from './viewbooking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewbookingPageRoutingModule
  ],
  declarations: [ViewbookingPage]
})
export class ViewbookingPageModule {}
