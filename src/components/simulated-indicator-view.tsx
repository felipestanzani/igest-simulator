import useIndicator from '@/hooks/indicator-hook';
import {Indicator, IndicatorDefinition} from '@/types/indicator';
import {cn} from '@/lib/utils';
import {Quartile} from '@/types/quartile';

interface SimulatedIndicatorViewProps {
  igest: number;
  indicator: Indicator;
  value: number;
}

type QuartileKey = keyof Quartile | 'fourth';

const quartileColors: Record<QuartileKey, string> = {
  first: 'green',
  second: 'amber',
  third: 'red',
  fourth: 'blue'
};

function getColorByValue(
  indicator: Indicator,
  definition: IndicatorDefinition
) {
  const quartile = indicator.getQuartile(definition.quartiles);
  const color = quartileColors[quartile];
  return getColorClass(color);
}

function getColorClass(color: string) {
  return `bg-${color}-100 text-${color}-800`;
}

export default function SimulatedIndicatorView({
  igest,
  indicator,
  value
}: SimulatedIndicatorViewProps) {
  const {definition} = useIndicator(indicator);
  const indicatorWithValue = Object.create(
    Object.getPrototypeOf(indicator),
    Object.getOwnPropertyDescriptors(indicator)
  );
  indicatorWithValue.value = value;
  const colorClass = getColorByValue(indicatorWithValue, definition);

  return (
    <div className={cn('flex flex-col rounded-md p-2 w-full', colorClass)}>
      <div className="flex flex-row items-center justify-between">
        <span className={cn('text-md font-bold pb-1', colorClass)}>
          {`${definition.id} - ${definition.name}`}
        </span>
        <div className="flex flex-row items-center justify-center space-x-4">
          <div className="flex flex-col items-center justify-center w-14">
            <span className="text-xs">Valor</span>
            <span className="text-xs font-bold">
              {indicator.initialValue.toFixed(3)}
            </span>
          </div>
          <div className="flex flex-row items-center justify-center w-30 space-x-2">
            <span className="text-xs">Impacto</span>
            <span className="text-lg font-bold">
              {indicator.getImpact(igest) + '%'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
