import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogContentComponent} from "../dialog-content/dialog-content.component";

@Component({
  selector: 'app-button3-content',
  templateUrl: './button3-content.component.html',
  styleUrls: ['./button3-content.component.css']
})
export class Button3ContentComponent {
  constructor(private dialog: MatDialog){
  }
  openDialog() {
    this.dialog.open(DialogContentComponent, {
      width:'30%'
    });
  }
}
