import {Component, Input} from '@angular/core';
import {Transaction} from "../../model/transaction-model";
import {TransactionsService} from "../../services/transactions.service";


@Component({
  selector: 'app-table-cost-content',
  templateUrl: './table-cost-content.component.html',
  styleUrls: ['./table-cost-content.component.css']
})

export class TableCostContentComponent {

  @Input() costos: Transaction[]=[];


  constructor(private transactionsService: TransactionsService) {

    this.transactionsService.getAll().subscribe((response:any)=>{
      const costos = response.filter((transaction: { type: string; }) => transaction.type === 'gasto');
      console.log(costos);
      this.costos = costos;
    });

  }



}
