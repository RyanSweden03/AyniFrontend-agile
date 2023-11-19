export class Crop {
  id: number;
  undergrowth: boolean;
  fertilize: boolean;
  oxygenate: boolean;
  line: boolean;
  hole: boolean;
  watered: number;
  pestCleaning: number;
  name: string;
  productId: number;
  userId: number;

  constructor() {
    this.id = 0;
    this.undergrowth = false;
    this.fertilize = false;
    this.oxygenate = false;
    this.line = false;
    this.hole = false;
    this.watered = 0;
    this.pestCleaning = 0;
    this.name = '';
    this.productId = 0;
    this.userId = 0;
  }
}
