import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SalesDialogContentComponent} from "../dialog-content/dialog-content.component";

@Component({
  selector: 'sales-card-step3-content',
  templateUrl: './card-step3-content.component.html',
  styleUrls: ['./card-step3-content.component.css']
})
export class SalesCardStep3ContentComponent {
  constructor(public dialog:MatDialog) { }

  openDialog() {
    this.dialog.open(SalesDialogContentComponent)
  }
}
