import { Component, OnInit } from '@angular/core';
import { Product } from "../../model/product";
import { ProductsService } from "../../services/products.service";
import { Router } from "@angular/router";
import { PageEvent } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { NewProductFormContentComponent } from "../../components/new-product-form-content/new-product-form-content.component";

@Component({
  selector: 'app-products-gallery-content',
  templateUrl: './products-gallery-content.component.html',
  styleUrls: ['./products-gallery-content.component.css']
})
export class ProductsGalleryContentComponent implements OnInit {

  productsList: Product[] = [];
  pagedList: Product[] = [];

  length: number = 0;
  pageSize: number = 6;
  pageSizeOptions: number[] = [3, 6, 9, 12];

  constructor(
    private productsService: ProductsService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productsService.getAll().subscribe((response: any) => {
      this.productsList = response;
      this.length = this.productsList.length;

      this.updatePagedList(0, this.pageSize);
    });
  }

  OnPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.updatePagedList(event.pageIndex, event.pageSize);
  }

  updatePagedList(pageIndex: number, pageSize: number) {
    let startIndex = pageIndex * pageSize;
    let endIndex = startIndex + pageSize;

    if (endIndex > this.length) {
      endIndex = this.length;
    }

    this.pagedList = this.productsList.slice(startIndex, endIndex);
  }

  navigateToProductDetails(id: number) {
    this.router.navigate(['products/', id]);
  }

  addNewProduct() {
    const dialogRef = this.dialog.open(NewProductFormContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.loadProducts();
    });
  }
}
