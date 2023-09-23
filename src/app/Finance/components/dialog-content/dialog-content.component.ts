import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";



@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent {
  freshnessList = ["Producto", "Servicio"];
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

  addCost() {
    console.log(this.productForm.value)
  }

}
