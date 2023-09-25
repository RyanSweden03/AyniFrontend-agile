import {Product} from "./product";

export class OrderDetail {
  "quantity": number;
  "product": Product;
  constructor() {
    this.quantity = 0;
    this.product = new Product();
  }
}
