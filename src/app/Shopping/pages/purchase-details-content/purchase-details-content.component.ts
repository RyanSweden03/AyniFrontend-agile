import { Component, Input } from '@angular/core';
import { Order } from "../../model/order";
import { User } from "../../../Authentication/model/user";
import { Product } from "../../../Management/model/product";
import { OrdersService } from "../../services/orders.service";
import { ProductsService } from "../../../Management/services/products.service";
import { UsersService } from "../../../Authentication/services/users.service";
import { MatDialog } from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {
  CancelPurchaseDialogContentComponent
} from "../../components/cancel-purchase-dialog-content/cancel-purchase-dialog-content.component";
import {SalesService} from "../../services/sales.service";
import {Sale} from "../../model/sale";

@Component({
  selector: 'app-purchase-details-content',
  templateUrl: './purchase-details-content.component.html',
  styleUrls: ['./purchase-details-content.component.css']
})
export class PurchaseDetailsContentComponent {
  order: Order = new Order();
  user: User = new User();
  sale: Sale = new Sale();
  product: Product = new Product();

  constructor(
    private orderService: OrdersService,
    private productsService: ProductsService,
    private salesService: SalesService,
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.route.params.subscribe(params => {
      const purchaseId = +params['id'];
      this.orderService.getById(purchaseId).subscribe((orderResponse: any) => {
        this.order=orderResponse;

        console.log(this.order);

        this.salesService.getById(this.order.saleId).subscribe((saleResponse: any) => {
          this.sale=saleResponse;
        });

        /*this.usersService.getById(this.order.acceptedBy).subscribe((userResponse: any) => {
          this.user=userResponse;
        });*/

        /*this.productsService.getById(this.order.saleId).subscribe((productResponse: any) => {
          this.product=productResponse;
        });*/
      });
    });
  }

  openDialog() {
    this.dialog.open(CancelPurchaseDialogContentComponent);
  }

  deleteOrder(id: number) {
    this.orderService.delete(id).subscribe(() => { });
  }

  calculateProgress(status: string){
    if (status === 'Pendiente') {
      return 0;
    } else if (status === 'Empaquetando') {
      return 50;
    }
    else if (status === 'Finalizado') {
      return 100;
    } else {
      return 0;
    }
  }

  navigateBack() {
    this.router.navigate(['/purchases']);
  }

}
