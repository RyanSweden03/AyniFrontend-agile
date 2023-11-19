import { Component } from '@angular/core';
import {ContactDialogComponent} from "../../../Authentication/components/contact-dialog/contact-dialog.component";
import {MatDialog} from "@angular/material/dialog";
@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.css']
})
export class OrderDialogComponent {

  constructor( private dialog: MatDialog) {

  }
  openMessageForm(): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }




}
