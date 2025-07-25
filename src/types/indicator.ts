import {AbstractIndicator} from '@/types/abstract-indicator';
import {Quartile} from '@/types/quartile';

export interface IndicatorDefinition {
  id: string;
  name: string;
  weight: number;
  quartiles: Quartile;
}

export class Indicator extends AbstractIndicator {
  id: string;
  weight: number;
  initialValue: number;

  constructor(id: string, weight: number, initialValue: number) {
    super(initialValue);
    this.id = id;
    this.weight = weight;
    this.initialValue = initialValue;
  }

  setCurrentValue(value: number) {
    this.value = value;
  }

  getTotalValue() {
    return this.value * (this.weight / 10);
  }

  getImpact(igest: number) {
    return ((this.getTotalValue() * 100) / 5 / igest).toFixed(2);
  }
}
