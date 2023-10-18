import {Component, Input} from '@angular/core';
import {Sale} from "../../model/sale";
import {User} from "../../../Authentication/model/user";
import {Product} from "../../model/product";
import {MatDialog} from "@angular/material/dialog";
import {
  CancelPurchaseDialogContentComponent
} from "../cancel-purchase-dialog-content/cancel-purchase-dialog-content.component";
import {SalesService} from "../../services/sales.service";

@Component({
  selector: 'app-purchase-card-content',
  templateUrl: './purchase-card-content.component.html',
  styleUrls: ['./purchase-card-content.component.css']
})
export class PurchaseCardContentComponent {
  @Input() order: Sale = new Sale();
  orders="/orders";

  users: User[] = [];
  products: Product[] = [];

  constructor(private saleService:SalesService,public dialog:MatDialog) {}

  openDialog(){
    this.dialog.open(CancelPurchaseDialogContentComponent);
  }

  getUser(userId: number): any{
    return this.users.find(user => user.id === userId);
  }

  getProduct(productId: number): any {
    return this.products.find(product => product.id === productId);
  }

  deleteOrder(id: number) {
    this.saleService.delete(id).subscribe(()=> {})
  }
}
