import { Component } from '@angular/core';
import {SalesService} from "../../services/sales.service";
import {Sale} from "../../model/sale";
import {Router} from "@angular/router";

@Component({
  selector: 'sales-card-step1-content',
  templateUrl: './card-step1-content.component.html',
  styleUrls: ['./card-step1-content.component.css']
})
export class SalesCardStep1ContentComponent {
  saleform1: Sale;
  constructor(private salesService: SalesService, private router: Router) {
    this.saleform1={id: 0, product:'',quantity:0,date:'',method:''};
  }

  onSubmit() {
    this.salesService.create(this.saleform1).subscribe(() => {
      this.router.navigate(['/sales']);
    });
  }

}
