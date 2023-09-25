import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Product} from "../../model/product";
import {FarmerHomeApiService} from "../../services/farmer-home-api.service";
import {ActivityApiService} from "../../services/activity-api.service";
import {Activity} from "../../model/activity";

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
  constructor(private farmerApi: FarmerHomeApiService,
              private activityApi: ActivityApiService) {
    this.farmerApi.getAll()
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
