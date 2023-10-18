import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SalesDialogContentComponent} from "../dialog-content/dialog-content.component";

@Component({
  selector: 'sales-step3-card-content',
  templateUrl: './step3-card-content.component.html',
  styleUrls: ['./step3-card-content.component.css']
})
export class SalesStep3CardContentComponent {
  constructor(public dialog:MatDialog) { }

  openDialog() {
    this.dialog.open(SalesDialogContentComponent)
  }
}
