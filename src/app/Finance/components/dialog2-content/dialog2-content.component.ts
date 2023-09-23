import { Component, OnInit  } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-dialog2-content',
  templateUrl: './dialog2-content.component.html',
  styleUrls: ['./dialog2-content.component.css']
})
export class Dialog2ContentComponent {
  freshnessList = ["Fruta", "Verdura"];
  productForm!: FormGroup

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      costName: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      date: ['', Validators.required],
      quantity: ['', Validators.required],
    })
  }

  addBill() {
    console.log(this.productForm.value)
  }
}
