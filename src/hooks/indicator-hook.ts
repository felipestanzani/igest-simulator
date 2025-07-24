import {Indicator, IndicatorDefinition} from '@/types/indicator';

function getDefinition(id: string): IndicatorDefinition {
  if (!id) {
    throw new Error('Indicator ID is required');
  }

  return {
    id: 'I01',
    name: 'Idade Média do Pendente de Julgamento',
    quartiles: {
      first: 0.2,
      second: 0.5,
      third: 0.7
    },
    weight: 3
  };
}

export default function useIndicator(indicator: Indicator) {
  const definition = getDefinition(indicator.id);

  return {definition};
}
