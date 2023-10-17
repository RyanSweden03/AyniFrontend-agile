import {Component, Input} from '@angular/core';
import { Rate} from "../../model/rate";
import { RateDialogComponent} from "../rate-dialog/rate-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import { RatesService} from "../../services/rates.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-rate-content',
  templateUrl: './rate-content.component.html',
  styleUrls: ['./rate-content.component.css']
})
export class RateContentComponent {
  @Input() product: Rate = new Rate();
  rateContent="/rate-content";
  private formData: any;

  constructor(public dialog:MatDialog, private ratesService:RatesService, private router:Router) {}

  openDialog() {
    this.dialog.open(RateDialogComponent)
  }

  onSubmit() {
    this.ratesService.create(this.formData).subscribe(() => {    });
  }

}
