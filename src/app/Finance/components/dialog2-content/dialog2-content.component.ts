import { Component, OnInit  } from '@angular/core';
import {Router} from "@angular/router";
import {ProfitsService} from "../../services/profits.service";
import {Profit} from "../../model/profit-model";

@Component({
  selector: 'app-dialog2-content',
  templateUrl: './dialog2-content.component.html',
  styleUrls: ['./dialog2-content.component.css']
})
export class Dialog2ContentComponent {
  freshnessList = ["Fruta", "Verdura"];
  form: Profit;
  constructor(private profitsService: ProfitsService, private router: Router) {
    this.form={id: 0,profitName:'',date:'',description:'',price:0,quantity:''};
  }

  onSubmit() {
    this.profitsService.create(this.form).subscribe(() => { });
  }
}
