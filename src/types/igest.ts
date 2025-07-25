import {AbstractIndicator} from './abstract-indicator';
import {Quartile} from './quartile';

export class Igest extends AbstractIndicator {
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
