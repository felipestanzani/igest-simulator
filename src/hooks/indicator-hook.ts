import {Indicator, IndicatorDefinition} from '@/types/indicator';

function getDefinition(id: string): IndicatorDefinition {
  if (!id) {
    throw new Error('Indicator ID is required');
  }

  return {
    id: 'I01',
    name: 'Idade Média do Pendente de Julgamento',
    quartiles: {
      first: 0,
      second: 0.5,
      third: 1
    },
    weight: 1
  };
}

export default function useIndicator(indicator: Indicator) {
  const definition = getDefinition(indicator.id);

  return {definition};
}

/*
I01 - Idade Média do Pendente de Julgamento
I02 - Pendentes
I03 - Taxa de Conclusos com o Prazo Vencido
I04 - Prazo Médio na Fase de Conhecimento
I05 - Prazo Médio na Fase de Cumprimento de Sentença
I06 - Taxa de Conciliação
I07 - Taxa de Solução
I08 - Taxa de Congest. na Fase de Conhecimento
I09 - Taxa de Congest. na Fase de Cump. de Sentença
I10 - Produtividade por Servidor
I11 - Pendentes por Servidor
I12 - Taxa de Extinção
*/
