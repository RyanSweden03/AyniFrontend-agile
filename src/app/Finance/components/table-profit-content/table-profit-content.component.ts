import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from "../../model/transaction-model";
import {TransactionsService} from "../../services/transactions.service";
import {DialogContentComponent} from "../dialog-content/dialog-content.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-table-profit-content',
  templateUrl: './table-profit-content.component.html',
  styleUrls: ['./table-profit-content.component.css']
})
export class TableProfitContentComponent implements OnInit{
  @Input() profits: Transaction[]=[];

  constructor(private transactionsService: TransactionsService, private dialog: MatDialog) {}
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

  openDialog() {
    this.dialog.open(DialogContentComponent, {
      width:'30%'
    });
  }
}
