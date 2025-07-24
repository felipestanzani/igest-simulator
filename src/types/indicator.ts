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
  igest: number;
  definition: IndicatorDefinition;

  constructor(
    id: string,
    initialValue: number,
    currentValue: number,
    igest: number,
    definition: IndicatorDefinition
  ) {
    this.id = id;
    this.initialValue = initialValue;
    this.currentValue = currentValue;
    this.igest = igest;
    this.definition = definition;
  }

  getImpact() {
    return (
      (this.initialValue * this.definition.weight) /
      0.5 /
      this.igest
    ).toFixed(2);
  }
}
