import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {SalesService} from "../../services/sales.service";
import {Sale} from "../../model/sale";
import {TokenStorageService} from "../../../Authentication/services/token-storage.service";

@Component({
  selector: 'app-add-sale-content',
  templateUrl: './add-sale-content.component.html',
  styleUrls: ['./add-sale-content.component.css']
})
export class AddSaleContentComponent {
  saleForm: Sale;
  constructor(private salesService: SalesService, private router: Router, private tokenStorage: TokenStorageService) {
    this.saleForm={
      id: 0,
      name: '',
      description: '',
      unitPrice: 0,
      quantity: 0,
      imageUrl: '',
      userId: 0
    };
  }

  onSubmit() {
    this.saleForm.userId=this.tokenStorage.getUser().id;
    this.salesService.create(this.saleForm).subscribe(() => {
      location.reload();
    });
  }
}
