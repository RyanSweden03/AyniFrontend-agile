import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CropsDialogContentComponent} from "../dialog-content/dialog-content.component";
import {CropsService} from "../../services/crops.service";
import {Router} from "@angular/router";

@Component({
  selector: 'crops-step3-card-content',
  templateUrl: './step3-card-content.component.html',
  styleUrls: ['./step3-card-content.component.css']
})
export class CropsStep3CardContentComponent {
  @Input() formData: any;
  constructor(public dialog:MatDialog, private cropsService:CropsService, private router:Router) { }

  openDialog() {
    this.dialog.open(CropsDialogContentComponent)
  }

  onSubmit() {
    this.cropsService.create(this.formData).subscribe(() => {    });
  }
}
