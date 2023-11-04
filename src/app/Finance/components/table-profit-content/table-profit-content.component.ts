import {Component, Input} from '@angular/core';
import {Transaction} from "../../model/transaction-model";
import {TransactionsService} from "../../services/transactions.service";

@Component({
  selector: 'app-table-profit-content',
  templateUrl: './table-profit-content.component.html',
  styleUrls: ['./table-profit-content.component.css']
})
export class TableProfitContentComponent {
  @Input() profits: Transaction[]=[];

  constructor(private transactionsService: TransactionsService) {

    this.transactionsService.getAll().subscribe((response:any)=>{
      const profits = response.filter((transaction: { type: string; }) => transaction.type === 'ingreso');
      console.log(profits);
      this.profits = profits;
    });
  }

}
