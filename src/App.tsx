import IndicatorView from '@/components/indicator-view';
import useIgest from '@/hooks/igest-hook';
import {Indicator} from '@/types/indicator';
import {Court} from '@/types/court';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import courts from '@/data/courts.json';
import indicatorsData from '@/data/indicators.json';
import {useState} from 'react';
import IgestView from './components/igest-view';
import {Igest} from './types/igest';

export default function App() {
  const {igestRef} = useIgest();
  const [selectedCourt, setSelectedCourt] = useState<Court | null>(null);
  const [igest, setIgest] = useState<Igest | null>(null);

  function handleCourtChange(courtName: string) {
    const courtData = indicatorsData.find((c) => c.name === courtName);
    if (!courtData) {
      setSelectedCourt(null);
      return;
    }
    const indicators = courtData.indicators.map(
      (ind: {id: string; value: number}) => new Indicator(ind.id, ind.value)
    );
    setSelectedCourt(new Court(courtData.name, courtData.igest, indicators));
    if (igestRef) {
      setIgest(new Igest(courtData.igest, igestRef.quartile));
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-2">
      <div className="flex flex-row items-center justify-center">
        {selectedCourt?.igest && igest && (
          <IgestView title="IGEST" igest={igest} />
        )}
      </div>
      <div className="flex flex-col items-left justify-center space-y-2">
        <CourtSelector courts={courts} handleCourtChange={handleCourtChange} />
        <Indicators selectedCourt={selectedCourt} />
      </div>
    </div>
  );
}

function CourtSelector({
  courts,
  handleCourtChange
}: {
  courts: string[];
  handleCourtChange: (courtName: string) => void;
}) {
  return (
    <Select onValueChange={handleCourtChange} required>
      <SelectTrigger>
        <SelectValue placeholder="Selecione uma vara" />
      </SelectTrigger>
      <SelectContent>
        {courts.map((court) => (
          <SelectItem key={court} value={court}>
            {court}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function Indicators({selectedCourt}: {selectedCourt: Court | null}) {
  return (
    <div className="flex flex-col items-left justify-center w-2xl space-y-1">
      {selectedCourt &&
        selectedCourt.indicators.map(
          (indicator) =>
            indicator.currentValue > 0 && (
              <IndicatorView
                indicator={indicator}
                igest={selectedCourt.igest}
              />
            )
        )}
    </div>
  );
}
