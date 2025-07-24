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

  constructor(id: string, initialValue: number) {
    this.id = id;
    this.initialValue = initialValue;
    this.currentValue = initialValue;
  }

  setCurrentValue(value: number) {
    this.currentValue = value;
  }

  getQuartile(definition: IndicatorDefinition) {
    if (this.currentValue > definition.quartiles.third) {
      return 'third';
    } else if (this.currentValue > definition.quartiles.second) {
      return 'second';
    } else if (this.currentValue > definition.quartiles.first) {
      return 'first';
    } else {
      return 'fourth';
    }
  }

  getImpact(definition: IndicatorDefinition, igest: number) {
    return ((this.initialValue * definition.weight) / 0.5 / igest).toFixed(2);
  }
}
