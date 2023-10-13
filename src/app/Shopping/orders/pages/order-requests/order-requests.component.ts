import {Component, Input, OnInit} from '@angular/core';
import {OrdersService} from "../../services/orders.service";
import {Order} from "../../model/order";
import {ProductsService} from "../../../products/services/products.service";
import {Product} from "../../../products/models/product";
import {UsersService} from "../../services/users.service";
import {User} from "../../model/user";
import {PageEvent} from "@angular/material/paginator";
import {from} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {OrderDialogComponent} from "../../components/order-dialog/order-dialog.component";

@Component({
  selector: 'app-order-requests',
  templateUrl: './order-requests.component.html',
  styleUrls: ['./order-requests.component.css']
})
export class OrderRequestsComponent implements OnInit {

  orders: Order[] = [];
  users: User[] = [];
  products: Product[] = [];
  pageSize = 4;
  pageIndex = 0;


  constructor(private orderService: OrdersService, private productsService: ProductsService, private userService: UsersService, public dialog: MatDialog) {
  }

  openDialog(){
    this.dialog.open(OrderDialogComponent);
  }
  ngOnInit(): void {
    this.orderService.getAll().subscribe((response: any) => {
      this.orders = response;

      this.orders.forEach(order => {

        this.productsService.getById(order.productId).subscribe((productResponse: any) => {
         this.products.push(productResponse);
        });

        this.userService.getById(order.userId).subscribe((userResponse: any) => {
         this.users.push(userResponse);
        });

      });

    })
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
  }

  getUser(userId: number): any{
    return this.users.find(user => user.id === userId);
  }

  getProduct(productId: number): any {
    return this.products.find(product => product.id === productId);

  }

  get pagedOrders(): Order[] {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.orders.slice(startIndex, endIndex);
  }

  protected readonly from = from;

  deleteOrder(id: number) {
    console.log(id);
    this.orderService.delete(id).subscribe(()=>
      {
        this.orders = this.orders.filter(order => order.id !== id)
      }
    )
  }
}

