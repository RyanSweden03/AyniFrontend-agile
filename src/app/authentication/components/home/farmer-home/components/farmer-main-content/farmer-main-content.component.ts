import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { ProductsService } from "../../../../../../management/services/products.service";
import { CropsService } from "../../../../../../management/services/crops.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-farmer-main-content',
  templateUrl: './farmer-main-content.component.html',
  styleUrls: ['./farmer-main-content.component.css']
})
export class FarmerMainContentComponent implements OnInit {
  
  products: any[] = [];
  recentProducts: any[] = [];
  crops: any[] = [];
  
  totalCrops: number = 0;
  pendingTasks: number = 0;
  
  displayedColumns: string[] = ['name', 'watered', 'pestCleaning', 'status'];
  dataSource!: MatTableDataSource<any>;

  constructor(
    private cropsService: CropsService,
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.productsService.getAll().subscribe((response: any) => {
      const allProducts = Array.isArray(response) ? response : [response];
      this.products = allProducts;
      this.recentProducts = this.products.slice(-3);
    });

    this.cropsService.getAll().subscribe((response: any) => {
      const allCrops = Array.isArray(response) ? response : [response];
      this.crops = allCrops;
      this.dataSource = new MatTableDataSource(this.crops);
      
      this.totalCrops = this.crops.length;
      this.pendingTasks = this.crops.filter(c => c.pickUpWeed || c.fertilizeCrop).length;
    });
  }

  goToProduct(id: number) {
    this.router.navigate(['products/', id]);
  }
}