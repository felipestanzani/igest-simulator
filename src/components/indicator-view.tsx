import useIndicator from '@/hooks/indicator-hook';
import {Indicator, IndicatorDefinition} from '@/types/indicator';
import {Slider} from '@/components/ui/slider';
import {useState} from 'react';
import {cn} from '@/lib/utils';
import {Input} from './ui/input';
import {Quartile} from '@/types/quartile';

interface IndicatorViewProps {
  igest: number;
  indicator: Indicator;
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
  const quartile = indicator.getQuartile(definition);
  const color = quartileColors[quartile];
  return getColorClass(color);
}

function getColorClass(color: string) {
  return `bg-${color}-100 text-${color}-800`;
}

export default function IndicatorView({igest, indicator}: IndicatorViewProps) {
  const {definition} = useIndicator(indicator);
  const [value, setValue] = useState(indicator.initialValue);
  const [colorClass, setColorClass] = useState(
    getColorByValue(indicator, definition)
  );

  function setValueAndColor(newValue: number) {
    indicator.setCurrentValue(newValue);
    setValue(newValue);
    const quartile = indicator.getQuartile(definition);
    const color = quartileColors[quartile];
    setColorClass(getColorClass(color));
  }

  return (
    <div
      className={cn(
        'flex flex-col rounded-md p-1 pl-2 pr-2 w-full',
        colorClass
      )}
    >
      <div className="flex flex-row items-center justify-between">
        <span className={cn('text-xs font-bold pb-1', colorClass)}>
          {`${definition.id} - ${definition.name}`}
        </span>
        <span className={cn('text-xs font-bold pb-1', colorClass)}>
          {`Peso: ${definition.weight}`}
        </span>
      </div>
      <div>
        <div className="flex flex-row items-center justify-center space-x-4">
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col items-center justify-center w-14">
              <span className="text-xs">Valor</span>
              <span className="text-xs font-bold">
                {indicator.initialValue.toFixed(3)}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center w-18">
              <span className="text-xs">Impacto</span>
              <span className="text-xs font-bold">
                {indicator.getImpact(definition, igest) + '%'}
              </span>
            </div>
          </div>

          <Slider
            min={0}
            max={1}
            step={0.01}
            defaultValue={[indicator.initialValue]}
            value={[value]}
            onValueChange={([newValue]) => setValueAndColor(newValue)}
          />
          <Input
            className="bg-white w-28"
            type="number"
            min={0}
            max={1}
            step={0.001}
            value={value.toFixed(3)}
            onChange={(e) => setValueAndColor(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}
