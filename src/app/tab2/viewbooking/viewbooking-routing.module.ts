import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewbookingPage } from './viewbooking.page';

const routes: Routes = [
  {
    path: '',
    component: ViewbookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewbookingPageRoutingModule {}
