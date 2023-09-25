import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CropsDialogContentComponent} from "../dialog-content/dialog-content.component";
import {CropsService} from "../../services/crops.service";
import {Router} from "@angular/router";

@Component({
  selector: 'crops-card-step3-content',
  templateUrl: './card-step3-content.component.html',
  styleUrls: ['./card-step3-content.component.css']
})
export class CropsCardStep3ContentComponent {
  @Input() formData: any;
  constructor(public dialog:MatDialog, private cropsService:CropsService, private router:Router) { }

  openDialog() {
    this.dialog.open(CropsDialogContentComponent)
  }

  onSubmit() {
    this.cropsService.create(this.formData).subscribe(() => {    });
  }
}
