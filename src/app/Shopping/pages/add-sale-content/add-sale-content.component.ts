import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {SalesService} from "../../services/sales.service";
import {Sale} from "../../model/sale";

@Component({
  selector: 'app-add-sale-content',
  templateUrl: './add-sale-content.component.html',
  styleUrls: ['./add-sale-content.component.css']
})
export class AddSaleContentComponent {
  saleForm: Sale;
  constructor(private salesService: SalesService, private router: Router) {
    this.saleForm={
      id: 0,
      name: '',
      description: '',
      unitPrice: 0,
      quantity: 0,
      imageUrl: ''
    };
  }

  onSubmit() {
    this.salesService.create(this.saleForm).subscribe(() => {
      this.router.navigate(['/sales']);
      location.reload();
    });
  }
}
