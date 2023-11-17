import { Component} from '@angular/core';
import {TransactionsService} from "../../services/transactions.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent {
    form: FormGroup;
  constructor(private fb:FormBuilder, private transactionsService: TransactionsService) {
    this.form = this.fb.group({
      id: [0],
      type: ['', Validators.required],
      costName: ['', Validators.required],
      date: [''],
      description: [''],
      price: [],
      quantity: ['']
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.transactionsService.create(this.form.value).subscribe(() => {
      location.reload();
    });
  }
}
