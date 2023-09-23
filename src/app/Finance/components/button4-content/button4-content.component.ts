import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogContentComponent} from "../dialog-content/dialog-content.component";

@Component({
  selector: 'app-button4-content',
  templateUrl: './button4-content.component.html',
  styleUrls: ['./button4-content.component.css']
})
export class Button4ContentComponent {
  constructor(private dialog: MatDialog){
  }
  openDialog() {
    this.dialog.open(DialogContentComponent, {
      width:'30%'
    });
  }

}
