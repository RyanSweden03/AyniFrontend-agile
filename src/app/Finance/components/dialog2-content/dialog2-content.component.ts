import { Component, OnInit  } from '@angular/core';
import {Router} from "@angular/router";
import {BillsService} from "../../services/bills.service";
import {Bill} from "../../model/bill-model";

@Component({
  selector: 'app-dialog2-content',
  templateUrl: './dialog2-content.component.html',
  styleUrls: ['./dialog2-content.component.css']
})
export class Dialog2ContentComponent {
  freshnessList = ["Fruta", "Verdura"];
  form: Bill;
  constructor(private billsService: BillsService, private router: Router) {
    this.form={id: 0,costName:'',date:'',description:'',price:0,quantity:''};
  }

  onSubmit() {
    this.billsService.create(this.form).subscribe(() => { });
  }
}
