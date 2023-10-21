import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Sale} from "../../model/sale";
import {SalesService} from "../../services/sales.service";
import {ProductsService} from "../../services/products.service";
import {UsersService} from "../../../Authentication/services/users.service";
import {Product} from "../../model/product";
import {User} from "../../../Authentication/model/user";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-purchases-content',
  templateUrl: './purchases-content.component.html',
  styleUrls: ['./purchases-content.component.css']
})
export class PurchasesContentComponent {
  purchases: Sale[] = [];
  users: User[] = [];
  products: Product[] = [];
  pagedList: Sale[] = [];
  breakpoint: number = 3;
  length: number = 0;
  pageSize: number = 2;
  pageSizeOptions: number[] = [2, 4, 6, 8];

  constructor(private saleService: SalesService, private productsService: ProductsService, private userService: UsersService, private router: Router) {
  }

  ngOnInit(): void {
    this.loadData(2);
  }

  loadData(userId: number) {
    this.saleService.getAll().subscribe((response: any) => {
      this.purchases = response.filter((purchase: any) => purchase.orderedBy === userId);
      this.pagedList = this.purchases.slice(0,2)
      this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
      this.length = this.purchases.length;

      this.purchases.forEach(purchase => {
        this.productsService.getById(purchase.productId).subscribe((productResponse: any) => {
          this.products.push(productResponse);
        });

        this.userService.getById(purchase.acceptedBy).subscribe((userResponse: any) => {
          this.users.push(userResponse);
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
