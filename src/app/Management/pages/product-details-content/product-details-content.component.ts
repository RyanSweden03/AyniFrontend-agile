import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {CropdataService} from "../../services/cropdata.service";

@Component({
  selector: 'app-product-details-content',
  templateUrl: './product-details-content.component.html',
  styleUrls: ['./product-details-content.component.css']
})
export class ProductDetailsContentComponent implements OnInit{

  product: Product = new Product();
  crops="/crops";
  form: any = {
    undergrowth: false,
    fertilize: false,
    oxygenate: false,
    line: false,
    hole: false,
    name: '',
    productId: 0
  };

  constructor(private route: ActivatedRoute, private productsService: ProductsService, private dataService: CropdataService) {}
  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.route.params.subscribe(params => {
      const productId = +params['id'];
        this.productsService.getById(productId).subscribe((productResponse: any) => {
          this.product=productResponse;
          this.form.productId=productId;
        });
      });
  }

  saveData() {
    this.dataService.setFormData(this.form);
  }
}
