import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-product-details-content',
  templateUrl: './product-details-content.component.html',
  styleUrls: ['./product-details-content.component.css']
})
export class ProductDetailsContentComponent implements OnInit{

  product: Product = new Product();
  crops="/crops";

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {}
  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.route.params.subscribe(params => {
      const productId = +params['id'];
        this.productsService.getById(productId).subscribe((productResponse: any) => {
          this.product=productResponse;
        });
      });
  }
}
