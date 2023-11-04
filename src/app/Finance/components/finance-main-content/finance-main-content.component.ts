import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {TransactionsService} from "../../services/transactions.service";
import {Transaction} from "../../model/transaction-model";


@Component({
  selector: 'app-finance-main-content',
  templateUrl: './finance-main-content.component.html',
  styleUrls: ['./finance-main-content.component.css']
})
export class FinanceMainContentComponent implements AfterViewInit{
  displayedColumns: string[] = ['id', 'type', 'costName', 'date', 'description', 'price'];
  transactions: Transaction[] = [];
  constructor(private _liveAnnouncer: LiveAnnouncer, private transactionsService: TransactionsService) {
    this.transactionsService.getAll().subscribe((response:any)=>{
       console.log(response);
       this.transactions = response;
       this.dataSource.data = this.transactions;
    });
  }
  dataSource = new MatTableDataSource(this.transactions);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
