export class Transaction {
  id: number;
  type: string;
  costName: string;
  date: string;
  description: string;
  price: number;
  quantity: string;
  constructor(){
    this.id=0;
    this.type= '';
    this.costName = '';
    this.date = '';
    this.description = '';
    this.price = 0;
    this.quantity = '';
  }

}
