import {Indicator} from '@/types/indicator';
import {Igest} from '@/types/igest';

export class Court {
  id: number;
  name: string;
  igest: Igest;
  indicators: Indicator[];

  constructor(
    id: number,
    name: string,
    igest: number,
    indicators: Indicator[]
  ) {
    this.id = id;
    this.name = name;
    this.igest = new Igest(igest);
    this.indicators = indicators;
  }

  getSimulatedIgest() {
    const sum = this.indicators.reduce((acc, indicator) => {
      return acc + indicator.getTotalValue();
    }, 0);

    return new Igest(sum / 5);
  }
}
