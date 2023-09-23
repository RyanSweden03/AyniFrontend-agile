import {Component, Input} from '@angular/core';
import {CostsService} from "../../services/costs.service";
import {CostModel} from "../../model/cost-model";


@Component({
  selector: 'app-table-cost-content',
  templateUrl: './table-cost-content.component.html',
  styleUrls: ['./table-cost-content.component.css']
})

export class TableCostContentComponent {

  @Input() costos: Array<CostModel>=[];


  constructor(private costservice: CostsService) {


    this.costservice.getAll().subscribe((response:any)=>{
      console.log(response);
    });

  }



}
