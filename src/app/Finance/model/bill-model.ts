export class Bill {
  id: number;
  costName: string;
  date: string;
  description: string;
  price: number;
  quantity: string;
  constructor(){
    this.id=0;
    this.costName = '';
    this.date = '';
    this.description = '';
    this.price = 0;
    this.quantity = '';
  }

}
