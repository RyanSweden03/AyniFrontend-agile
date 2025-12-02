import { Component } from '@angular/core';
import { CropsService } from '../../services/crops.service';
import { Crop } from '../../model/crop';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-crops-list',
  templateUrl: './crops-list.component.html',
  styleUrls: ['./crops-list.component.css']
})
export class CropsListComponent {
  crops: Crop[] = [];
  productImages: Map<number, string> = new Map();

  constructor(
    private cropsService: CropsService,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.productsService.getAll().subscribe((response: any) => {
      const products = response as Product[];

      products.forEach(product => {
        this.productImages.set(product.id, product.imageUrl);
      });

      this.getAllCrops();
    });
  }

  getAllCrops() {
    this.cropsService.getAll().subscribe((response: any) => {
      this.crops = response;
    });
  }

  getImageUrl(productId: number): string {
    return this.productImages.get(productId) || 'assets/placeholder.jpg';
  }
}
