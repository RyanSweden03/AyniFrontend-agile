export class Product {
  id: number;
  name: string;
  description: string;
  unit_price: number;
  image_url: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.unit_price = 0;
    this.image_url = '';
  }
}
