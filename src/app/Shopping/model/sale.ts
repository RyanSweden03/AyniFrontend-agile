export class Sale {
  id: number;
  productId: number;
  orderedBy: number;
  acceptedBy: number;
  description: string;
  quantity: number;
  status: string;
  orderedDate: string;
  totalPrice: string;
  paymentMethod: string;

  constructor() {
    this.id = 0;
    this.productId = 0;
    this.orderedBy = 0;
    this.acceptedBy = 0;
    this.description = '';
    this.quantity = 0;
    this.status = '';
    this.orderedDate = '';
    this.totalPrice = '';
    this.paymentMethod = '';
  }
}
