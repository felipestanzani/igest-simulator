import {Indicator} from './indicator';

export class Court {
  name: string;
  igest: number;
  indicators: Indicator[];

  constructor(name: string, igest: number, indicators: Indicator[]) {
    this.name = name;
    this.igest = igest;
    this.indicators = indicators;
  }
}
