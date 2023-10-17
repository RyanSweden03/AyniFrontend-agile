export class Rate {
  id: number;
  date: string;
  name: string;
  quantity: number;
  producer: string;
  price: number;
  imageUrl: string;

  constructor() {
    this.id = 0;
    this.date = '';
    this.name = '';
    this.quantity = 0;
    this.producer = '';
    this.price = 0;
    this.imageUrl = '';
  }
}
