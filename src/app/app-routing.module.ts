import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TableCostContentComponent} from "./Finance/components/table-cost-content/table-cost-content.component";

const routes: Routes = [
  {path: 'costList', component: TableCostContentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
