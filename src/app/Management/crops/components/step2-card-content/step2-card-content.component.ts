import {Component, EventEmitter, Output} from '@angular/core';
import {CropsService} from "../../services/crops.service";

@Component({
  selector: 'crops-step2-card-content',
  templateUrl: './step2-card-content.component.html',
  styleUrls: ['./step2-card-content.component.css']
})
export class CropsStep2CardContentComponent {
  @Output() formCompleted2 = new EventEmitter<any>();

  cropform2: any = {
    watered: 0,
    pestcleaning: 0,
  };

  saveData() {
    console.log(this.cropform2);
    this.formCompleted2.emit(this.cropform2);
  }
}
