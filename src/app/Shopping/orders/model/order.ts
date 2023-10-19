
export class Order {
  id: number;
  userId: number;
  description : string;
  productId: number;
  quantity: number;
  date: string;
  totalPrice: number;

  constructor() {
    this.id = 0;
    this.userId = 0;
    this.description = '';
    this.productId= 0;
    this.quantity= 0
    this.date = '';
    this.totalPrice = 0;
  }
}
