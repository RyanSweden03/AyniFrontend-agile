import {Component, Input} from '@angular/core';
import {BillModel} from "../../model/bill-model";
import {BillsService} from "../../services/bills.service";

@Component({
  selector: 'app-table-bill-content',
  templateUrl: './table-bill-content.component.html',
  styleUrls: ['./table-bill-content.component.css']
})
export class TableBillContentComponent {
  @Input() ganancias: Array<BillModel>=[];

  constructor(private billservice: BillsService) {

    this.billservice.getAll().subscribe((response:any)=>{
      console.log(response);
    });
  }

}
