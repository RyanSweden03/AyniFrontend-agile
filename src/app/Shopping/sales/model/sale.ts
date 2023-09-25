export class Sale {
  id: number;
  product: string;
  quantity: number;
  date: string;
  method: string;

  constructor() {
    this.id = 0;
    this.product = '';
    this.quantity = 0;
    this.date = '';
    this.method = '';
  }
}
