import {Component, Input} from '@angular/core';
import {Transaction} from "../../model/transaction-model";
import {TransactionsService} from "../../services/transactions.service";
import {DialogContentComponent} from "../dialog-content/dialog-content.component";
import {MatDialog} from "@angular/material/dialog";
import {TokenStorageService} from "../../../Authentication/services/token-storage.service";


@Component({
  selector: 'app-table-cost-content',
  templateUrl: './table-cost-content.component.html',
  styleUrls: ['./table-cost-content.component.css']
})

export class TableCostContentComponent {

  @Input() costos: Transaction[]=[];


  constructor(private transactionsService: TransactionsService, private dialog: MatDialog, private tokenStorage: TokenStorageService) {  }
  ngOnInit(): void {
    this.loadData(this.tokenStorage.getUser().id);
  }

  loadData(id: number){
    this.transactionsService.getAll().subscribe((response:any)=>{
      const costos = response.filter((transaction: any) => transaction.type === 'Cost' && transaction.userId === id);
      this.costos = costos;
    });
  }

  deleteCost(id: number) {
    this.transactionsService.delete(id).subscribe(()=>
      {
        this.loadData(this.tokenStorage.getUser().id);
      }
    )
  }

  openDialog() {
    this.dialog.open(DialogContentComponent, {
      width:'30%'
    });
  }
}
