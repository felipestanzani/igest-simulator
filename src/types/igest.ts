import {Quartile} from './quartile';

export class Igest {
  value: number;
  quartile: Quartile;

  constructor(value: number, quartiles: Quartile) {
    this.value = value;
    this.quartile = quartiles;
  }

  getQuartile() {
    if (this.value > this.quartile.third) {
      return 'third';
    } else if (this.value > this.quartile.second) {
      return 'second';
    } else if (this.value > this.quartile.first) {
      return 'first';
    } else {
      return 'fourth';
    }
  }
}
