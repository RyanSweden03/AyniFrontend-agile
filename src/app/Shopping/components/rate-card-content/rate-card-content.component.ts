import {Component, Input} from '@angular/core';
import {Order} from "../../model/order";
import {User} from "../../../Authentication/model/user";
import {Product} from "../../../Management/model/product";
import {OrdersService} from "../../services/orders.service";
import {ProductsService} from "../../../Management/services/products.service";
import {UsersService} from "../../../Authentication/services/users.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {
  CancelPurchaseDialogContentComponent
} from "../cancel-purchase-dialog-content/cancel-purchase-dialog-content.component";
import {RatesService} from "../../services/rates.service";

@Component({
  selector: 'app-rate-card-content',
  templateUrl: './rate-card-content.component.html',
  styleUrls: ['./rate-card-content.component.css']
})
export class RateCardContentComponent {
  @Input() order: Order = new Order();
  @Input() products: Product[] = [];

  selectedRating: number = 0;

  constructor(public dialog:MatDialog, private ratesService: RatesService, private router: Router, private ordersService: OrdersService) {
  }

  openDialog(){
    this.dialog.open(CancelPurchaseDialogContentComponent);
  }

  getProduct(productId: number): any {
    return this.products.find(product => product.id === productId);
  }

  setRating(rating: number) {
    this.selectedRating = rating;
  }

  createReview() {
    const review = {
      rate: this.selectedRating,
      date: new Date().toISOString(),
      productId: this.order.saleId,
      userId: this.order.orderedBy,
    };

    this.order.status = 'Qualified';

    this.ratesService.create(review).subscribe(() => {
      this.ordersService.update(this.order.id, this.order).subscribe(() => {
        this.router.navigate(['/rates']);
        location.reload();
      });
    });
  }

}
