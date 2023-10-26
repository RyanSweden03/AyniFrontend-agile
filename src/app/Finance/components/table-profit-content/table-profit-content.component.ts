import {Component, Input} from '@angular/core';
import {Profit} from "../../model/profit-model";
import {ProfitsService} from "../../services/profits.service";

@Component({
  selector: 'app-table-profit-content',
  templateUrl: './table-profit-content.component.html',
  styleUrls: ['./table-profit-content.component.css']
})
export class TableProfitContentComponent {
  @Input() profits: Profit[]=[];

  constructor(private profitsService: ProfitsService) {

    this.profitsService.getAll().subscribe((response:any)=>{
      console.log(response);
    });
  }

}
