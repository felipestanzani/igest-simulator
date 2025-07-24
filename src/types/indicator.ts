import {Quartile} from './quartile';

export interface IndicatorDefinition {
  id: string;
  name: string;
  weight: number;
  quartiles: Quartile;
}

export class Indicator {
  id: string;
  initialValue: number;
  currentValue: number;
  impact: number;

  constructor(
    id: string,
    initialValue: number,
    currentValue: number,
    impact: number
  ) {
    this.id = id;
    this.initialValue = initialValue;
    this.currentValue = currentValue;
    this.impact = impact;
  }
}
