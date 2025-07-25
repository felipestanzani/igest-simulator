import {Quartile} from './quartile';

export abstract class AbstractIndicator {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  public getQuartile(quartile: Quartile) {
    if (this.value > quartile.third) {
      return 'third';
    } else if (this.value > quartile.second) {
      return 'second';
    } else if (this.value > quartile.first) {
      return 'first';
    } else {
      return 'fourth';
    }
  }
}
