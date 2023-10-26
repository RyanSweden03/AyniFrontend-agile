import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ActivityApiService} from "../../services/activity-api.service";
import {Activity} from "../../model/activity";
import {ProductsService} from "../../../../../../Management/services/products.service";
import {Product} from "../../../../../../Management/model/product";

@Component({
  selector: 'app-farmer-main-content',
  templateUrl: './farmer-main-content.component.html',
  styleUrls: ['./farmer-main-content.component.css']
})
export class FarmerMainContentComponent {
  products !: Product[];
  activities !: Activity[];

  // Table
  displayedColumns: string[] = ['name', 'description', 'start_date', 'finish_date'];
  dataSource!: MatTableDataSource<any>;
  constructor(private activityApi: ActivityApiService,
              private productsService: ProductsService) {
    this.productsService.getAll()
      .subscribe((response: any) => {
        this.products = response;
      });
    this.activityApi.getAll()
      .subscribe((response: any) => {
        this.activities = response;
        console.log(this.activities);
        this.dataSource = new MatTableDataSource(this.activities);
      });
  }
}
