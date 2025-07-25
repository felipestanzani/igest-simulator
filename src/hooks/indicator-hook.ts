import {Indicator, IndicatorDefinition} from '@/types/indicator';
import definitions from '@/data/definitions.json';
import indicatorsData from '@/data/indicators.json';
import {Igest} from '@/types/igest';

export function getDefinition(id: string): IndicatorDefinition {
  if (!id) {
    throw new Error('Indicator ID is required');
  }

  const indicator = definitions.indicators.find((def) => def.id === id);
  if (!indicator) {
    throw new Error(`Indicator definition not found for id: ${id}`);
  }
  return indicator as IndicatorDefinition;
}

export function getIndicatorsByCourt(court: string): Indicator[] {
  const indicators = indicatorsData.filter((ind) => ind.court === court);
  if (!indicators) {
    throw new Error(`Indicators not found for court: ${court}`);
  }

  return indicators.map((ind) => {
    const definition = getDefinition(ind.id);
    return new Indicator(ind.id, definition.weight, ind.value);
  });
}

export function getIgestByCourt(court: string): Igest {
  const indicator = indicatorsData.find((ind) => ind.court === court);
  if (!indicator) {
    throw new Error(`Indicators not found for court: ${court}`);
  }
  return new Igest(indicator.igest);
}

export default function useIndicator(indicator: Indicator) {
  const definition = getDefinition(indicator.id);

  return {definition};
}
