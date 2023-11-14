import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from "../../model/transaction-model";
import {TransactionsService} from "../../services/transactions.service";

@Component({
  selector: 'app-table-profit-content',
  templateUrl: './table-profit-content.component.html',
  styleUrls: ['./table-profit-content.component.css']
})
export class TableProfitContentComponent implements OnInit{
  @Input() profits: Transaction[]=[];

  constructor(private transactionsService: TransactionsService) {}
  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.transactionsService.getAll().subscribe((response:any)=>{
      const profits = response.filter((transaction: { type: string; }) => transaction.type === 'Ingreso');
      console.log(profits);
      this.profits = profits;
    });
  }

  deleteProfit(id: number) {
    this.transactionsService.delete(id).subscribe(()=>
      {
        this.loadData();
      }
    )
  }
}
