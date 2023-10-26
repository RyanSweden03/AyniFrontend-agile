import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'crops-step1-card-content',
  templateUrl: './step1-card-content.component.html',
  styleUrls: ['./step1-card-content.component.css']
})
export class CropsStep1CardContentComponent {
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
