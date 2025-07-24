import {Indicator, IndicatorDefinition} from '@/types/indicator';
import definitions from '@/data/definitions.json';

function getDefinition(id: string): IndicatorDefinition {
  if (!id) {
    throw new Error('Indicator ID is required');
  }

  const indicator = definitions.indicators.find((def) => def.id === id);
  if (!indicator) {
    throw new Error(`Indicator definition not found for id: ${id}`);
  }
  return indicator as IndicatorDefinition;
}

export default function useIndicator(indicator: Indicator) {
  const definition = getDefinition(indicator.id);

  return {definition};
}
