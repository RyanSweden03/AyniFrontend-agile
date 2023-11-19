import { Component} from '@angular/core';
import {TransactionsService} from "../../services/transactions.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TokenStorageService} from "../../../Authentication/services/token-storage.service";

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent {
    form: FormGroup;
  constructor(private fb:FormBuilder, private transactionsService: TransactionsService, private tokenStorage: TokenStorageService) {
    this.form = this.fb.group({
      id: [0],
      type: ['', Validators.required],
      costName: ['', Validators.required],
      date: [''],
      description: [''],
      price: [],
      quantity: [''],
      userId: this.tokenStorage.getUser().id
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.transactionsService.create(this.form.value).subscribe(() => {
      location.reload();
    });
  }
}
