import { Component } from '@angular/core';
import {Product} from "../../../Management/model/product";
import {ProductsService} from "../../../Management/services/products.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {PageEvent} from "@angular/material/paginator";
import {AddProductContentComponent} from "../../../Management/pages/add-product-content/add-product-content.component";
import {Sale} from "../../model/sale";
import {SalesService} from "../../services/sales.service";
import {AddSaleContentComponent} from "../add-sale-content/add-sale-content.component";

@Component({
  selector: 'app-sales-content',
  templateUrl: './sales-content.component.html',
  styleUrls: ['./sales-content.component.css']
})
export class SalesContentComponent {
  salesList: Sale[]= [];
  pagedList: Sale[]= [];
  breakpoint: number = 3;
  length: number = 0;
  pageSize: number = 6;
  pageSizeOptions: number[] = [3, 6, 9, 12];

  constructor(private salesService: SalesService, private router: Router, public dialog:MatDialog) {
  }

  navigateToSaleDetails(id: number) {
    this.router.navigate(['sales/details', id]);
  }

  OnPageChange(event: PageEvent){
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.length){
      endIndex = this.length;
    }
    this.pagedList = this.salesList.slice(startIndex, endIndex);
  }

  onResize(event:any) { //to adjust to screen size
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  }
  ngOnInit(): void {
    this.salesService.getAll().subscribe((response:any) => {
      this.salesList = response;
      this.pagedList = this.salesList.slice(0,6)
      this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
      this.length = this.salesList.length;
    });
  }
}
