import {cn} from '@/lib/utils';
import {Igest} from '@/types/igest';
import {Quartile} from '@/types/quartile';
import {useEffect, useState} from 'react';

type QuartileKey = keyof Quartile | 'fourth';

const quartileColors: Record<QuartileKey, string> = {
  first: 'green',
  second: 'amber',
  third: 'red',
  fourth: 'blue'
};

function getColorByValue(igest: Igest) {
  const quartile = igest.getQuartile();
  const color = quartileColors[quartile];
  return getColorClass(color);
}

function getColorClass(color: string) {
  return `bg-${color}-100 text-${color}-800`;
}

interface IgestViewProps {
  title: string;
  igest: Igest;
}

export default function IgestView({title, igest}: IgestViewProps) {
  const [colorClass, setColorClass] = useState(getColorByValue(igest));

  useEffect(() => {
    setColorClass(getColorByValue(igest));
  }, [igest.value]);

  if (!igest) {
    return null;
  }

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-md w-32 h-24',
        colorClass
      )}
    >
      <h1 className="text-2xl font-bold">{igest.value.toFixed(3)}</h1>
      <p className="text-sm text-muted-foreground">{title}</p>
    </div>
  );
}
