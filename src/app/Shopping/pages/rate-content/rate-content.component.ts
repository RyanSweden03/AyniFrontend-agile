import {Component, Input} from '@angular/core';
import { Rate} from "../../model/rate";
import { RateDialogComponent} from "../../components/rate-dialog/rate-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import { RatesService} from "../../services/rates.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../../Management/model/product";
import {ProductsService} from "../../../Management/services/products.service";
import {Order} from "../../model/order";
import {User} from "../../../Authentication/model/user";
import {OrdersService} from "../../services/orders.service";
import {UsersService} from "../../../Authentication/services/users.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-rate-content',
  templateUrl: './rate-content.component.html',
  styleUrls: ['./rate-content.component.css']
})
export class RateContentComponent {
  purchases: Order[] = [];
  products: Product[] = [];
  pagedList: Order[] = [];
  breakpoint: number = 3;
  length: number = 0;
  pageSize: number = 2;
  pageSizeOptions: number[] = [2, 4, 6, 8];

  constructor(private ordersService: OrdersService, private productsService: ProductsService, private router: Router) {
  }

  ngOnInit(): void {
    this.loadData(2);
  }

  loadData(userId: number) {
    this.ordersService.getAll().subscribe((response: any) => {
      this.purchases = response.filter((purchase: any) => purchase.orderedBy === userId && purchase.status==='Finalized');
      console.log(this.purchases);
      this.pagedList = this.purchases.slice(0,2);
      this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
      this.length = this.purchases.length;

      this.purchases.forEach(purchase => {
        this.productsService.getById(purchase.saleId).subscribe((productResponse: any) => {
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
