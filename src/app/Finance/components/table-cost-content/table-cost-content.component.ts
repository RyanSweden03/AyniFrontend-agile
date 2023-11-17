import {Component, Input} from '@angular/core';
import {Transaction} from "../../model/transaction-model";
import {TransactionsService} from "../../services/transactions.service";
import {DialogContentComponent} from "../dialog-content/dialog-content.component";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-table-cost-content',
  templateUrl: './table-cost-content.component.html',
  styleUrls: ['./table-cost-content.component.css']
})

export class TableCostContentComponent {

  @Input() costos: Transaction[]=[];


  constructor(private transactionsService: TransactionsService, private dialog: MatDialog) {  }
  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.transactionsService.getAll().subscribe((response:any)=>{
      const costos = response.filter((transaction: { type: string; }) => transaction.type === 'Gasto');
      console.log(costos);
      this.costos = costos;
    });
  }

  deleteCost(id: number) {
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
