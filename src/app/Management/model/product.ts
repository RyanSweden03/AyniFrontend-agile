export class Product {
  id: number;
  name: string;
  description: string;
  distance: string;
  depth: string;
  weather: string;
  groundType: string;
  season: string;
  unitPrice: number;
  imageUrl: string;
  userId: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.distance = '';
    this.depth = '';
    this.weather = '';
    this.groundType = '';
    this.season = '';
    this.unitPrice = 0;
    this.imageUrl = '';
    this.userId = 0;
  }
}
