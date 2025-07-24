import useIgest from '@/hooks/igest-hook';
import {Card} from '@/components/ui/card';
import useIndicator from '@/hooks/indicator-hook';
import {Indicator} from '@/types/indicator';

interface IndicatorViewProps {
  indicator: Indicator;
}

export default function IndicatorView({indicator}: IndicatorViewProps) {
  const {igest} = useIgest();
  const {definition} = useIndicator(indicator);

  return (
    <Card className="flex flex-col items-center justify-center p-4 m-4">
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-md font-bold">{`${definition.id} - ${definition.name}`}</h1>
        </div>
      </div>
    </Card>
  );
}
