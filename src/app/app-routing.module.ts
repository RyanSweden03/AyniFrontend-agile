import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SalesStepperContentComponent} from "./Shopping/sales/components/stepper-content/stepper-content.component";
import {TableCostContentComponent} from "./Finance/components/table-cost-content/table-cost-content.component";

const routes: Routes = [
  { path: 'sales', component: SalesStepperContentComponent },
  {path: 'costList', component: TableCostContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
