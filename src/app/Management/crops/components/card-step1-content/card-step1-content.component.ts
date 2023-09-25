import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'crops-card-step1-content',
  templateUrl: './card-step1-content.component.html',
  styleUrls: ['./card-step1-content.component.css']
})
export class CropsCardStep1ContentComponent {
  @Output() formCompleted1 = new EventEmitter<any>();

  cropform1: any = {
    undergrowth: false,
    fertilize: false,
    oxygenate: false,
    lines: false,
    holes: false,
  };

  saveData() {
    this.formCompleted1.emit(this.cropform1);
  }
}
