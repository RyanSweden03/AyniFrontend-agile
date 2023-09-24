import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SalesStepperContentComponent} from "./sales/components/stepper-content/stepper-content.component";

const routes: Routes = [
  { path: 'sales', component: SalesStepperContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
