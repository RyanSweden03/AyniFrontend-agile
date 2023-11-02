export class Crop {
  id: number;
  undergrowth: boolean;
  fertilize: boolean;
  oxygenate: boolean;
  lines: boolean;
  holes: boolean;
  watered: number;
  pestcleaning: number;

  constructor() {
    this.id = 0;
    this.undergrowth = false;
    this.fertilize = false;
    this.oxygenate = false;
    this.lines = false;
    this.holes = false;
    this.watered = 0;
    this.pestcleaning = 0;
  }
}
