import useIndicator from '@/hooks/indicator-hook';
import {Indicator} from '@/types/indicator';
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

function getColorClass(color: string) {
  return `bg-${color}-100 text-${color}-800`;
}

export default function IndicatorView({igest, indicator}: IndicatorViewProps) {
  const {definition} = useIndicator(indicator);
  const [value, setValue] = useState(indicator.initialValue);
  const [colorClass, setColorClass] = useState(getColorClass('green'));

  function setValueAndColor(newValue: number) {
    indicator.setCurrentValue(newValue);
    setValue(newValue);
    const quartile = indicator.getQuartile(definition);
    const color = quartileColors[quartile];
    setColorClass(getColorClass(color));
  }

  return (
    <div className={cn('flex flex-col rounded-md p-2 w-full', colorClass)}>
      <span className={cn('text-sm font-bold pb-1', colorClass)}>
        {`${definition.id} - ${definition.name}`}
      </span>
      <span className={cn('text-sm font-bold pb-1', colorClass)}>
        {`- Peso: ${definition.weight}%`}
      </span>
      <div>
        <div className="flex flex-row items-center justify-center space-x-4">
          <div className="flex flex-col items-center justify-center bg-black/5 rounded-md p-1 space-x-2">
            <div className="flex flex-row items-center justify-center">
              <div className="flex flex-col items-center justify-center w-14">
                <span className="text-sm font-bold">Valor</span>
                <span className="text-sm">
                  {indicator.initialValue.toFixed(3)}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center w-18">
                <span className="text-sm font-bold">Impacto</span>
                <span className="text-sm">
                  {indicator.getImpact(definition, igest) + '%'}
                </span>
              </div>
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
