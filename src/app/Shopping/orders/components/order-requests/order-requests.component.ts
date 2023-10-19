import {Component, OnInit, ViewChild} from '@angular/core';
import {OrdersService} from "../../services/orders.service";
import {Order} from "../../model/order";
import {ProductsService} from "../../../products/services/products.service";
import {Product} from "../../../products/models/product";
import {UsersService} from "../../services/users.service";
import {User} from "../../model/user";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {from} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {OrderDialogComponent} from "../order-dialog/order-dialog.component";
import {Router} from "@angular/router";

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
  pageNumbers: number[] = [];

  constructor(private orderService: OrdersService, private productsService: ProductsService, private userService: UsersService, public dialog: MatDialog, private router: Router) {
  }

  openDialog(){
    this.dialog.open(OrderDialogComponent);
  }
  ngOnInit(): void {
   this.loadData();
  }

  loadData(){
    this.orderService.getAll().subscribe((response: any) => {
      this.orders = response;
      this.pageNumbers = Array.from({ length: Math.ceil(this.orders.length / this.pageSize) }, (_, index) => index );

      this.orders.forEach(order => {

        this.productsService.getById(order.productId).subscribe((productResponse: any) => {
          this.products.push(productResponse);
        });

        this.userService.getById(order.userId).subscribe((userResponse: any) => {
          this.users.push(userResponse);
        });

      });
    });
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

  deleteOrder(id: number) {
    this.orderService.delete(id).subscribe(()=>
      {
        this.loadData();
      }
    )
  }

  goToPage(pageNumber: number) {
    if (pageNumber >= 0 && pageNumber < this.pageNumbers.length) {
      this.pageIndex = pageNumber;
    }
  }

  navigateToPreviousView() {
    this.router.navigate(['farmer-home']).then(r =>  console.log('Navegación exitosa'));
  }
}

