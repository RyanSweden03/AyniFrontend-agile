import { Component } from '@angular/core';
import {Order} from "../../model/order";
import {OrdersService} from "../../services/orders.service";
import {UsersService} from "../../../Authentication/services/users.service";
import {Product} from "../../../Management/model/product";
import {User} from "../../../Authentication/model/user";
import {PageEvent} from "@angular/material/paginator";
import {SalesService} from "../../services/sales.service";
import {TokenStorageService} from "../../../Authentication/services/token-storage.service";

@Component({
  selector: 'app-purchases-content',
  templateUrl: './purchases-content.component.html',
  styleUrls: ['./purchases-content.component.css']
})
export class PurchasesContentComponent {
  purchases: Order[] = [];
  users: User[] = [];
  products: Product[] = [];
  pagedList: Order[] = [];
  breakpoint: number = 3;
  length: number = 0;
  pageSize: number = 2;
  pageSizeOptions: number[] = [2, 4, 6, 8];

  constructor(private ordersService: OrdersService, private salesService: SalesService, private userService: UsersService, private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    this.loadData(this.tokenStorage.getUser().id);
  }

  loadData(userId: number) {
    this.ordersService.getAll().subscribe((response: any) => {
      this.purchases = response.filter((purchase: any) => purchase.orderedBy === userId);
      this.pagedList = this.purchases.slice(0,2)
      this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
      this.length = this.purchases.length;

      this.purchases.forEach(purchase => {
        this.salesService.getById(purchase.saleId).subscribe((productResponse: any) => {
          this.products.push(productResponse);
        });
      });
    });
  }

  OnPageChange(event: PageEvent){
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.length){
      endIndex = this.length;
    }
    this.pagedList = this.purchases.slice(startIndex, endIndex);
  }

  onResize(event:any) {
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  }
}
