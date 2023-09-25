import {Component, EventEmitter, Output} from '@angular/core';
import {CropsService} from "../../services/crops.service";

@Component({
  selector: 'crops-card-step2-content',
  templateUrl: './card-step2-content.component.html',
  styleUrls: ['./card-step2-content.component.css']
})
export class CropsCardStep2ContentComponent {
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
