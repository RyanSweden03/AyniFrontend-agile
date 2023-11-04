import { Component} from '@angular/core';
import {Transaction} from "../../model/transaction-model";
import {TransactionsService} from "../../services/transactions.service";

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent {
  freshnessList = ["Producto", "Servicio"];
    form: Transaction;
  constructor(private transactionsService: TransactionsService) {
    this.form={id: 0,type:'', costName:'',date:'',description:'',price:0,quantity:''};
  }

  onSubmit() {
    this.transactionsService.create(this.form).subscribe(() => { });
  }
}
