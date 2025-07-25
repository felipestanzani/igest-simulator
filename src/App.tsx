import IndicatorView from '@/components/indicator-component';
import useIgest from '@/hooks/igest-hook';
import {Court} from '@/types/court';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {useState} from 'react';
import IgestView from '@/components/igest-view';
import {Igest} from '@/types/igest';
import Legend from '@/components/legend';
import useCourts, {getCourt} from '@/hooks/court-hook';

export default function App() {
  const {courts} = useCourts();
  const {igestQuartiles} = useIgest();
  const [selectedCourt, setSelectedCourt] = useState<Court | null>(null);
  const [igest, setIgest] = useState<Igest | null>(null);

  function handleCourtChange(courtId: string) {
    const court = getCourt(Number(courtId));
    setSelectedCourt(court);

    if (court) {
      setIgest(court.igest);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8">
      <div className="flex flex-row items-center justify-center space-x-4">
        {selectedCourt?.igest && igest && igestQuartiles && (
          <IgestView title="IGEST" igest={igest} quartile={igestQuartiles} />
        )}
        {selectedCourt && igestQuartiles && (
          <IgestView
            title="IGEST Simulado"
            igest={selectedCourt.getSimulatedIgest()}
            quartile={igestQuartiles}
          />
        )}
      </div>
      <div className="flex flex-col items-left justify-center space-y-2">
        <div className="flex flex-row items-center justify-between">
          <CourtSelector
            courts={courts}
            handleCourtChange={handleCourtChange}
          />
          <Legend />
        </div>
        <Indicators selectedCourt={selectedCourt} />
      </div>
    </div>
  );
}

function CourtSelector({
  courts,
  handleCourtChange
}: {
  courts: Court[];
  handleCourtChange: (courtId: string) => void;
}) {
  return (
    <Select onValueChange={(value) => handleCourtChange(value)} required>
      <SelectTrigger>
        <SelectValue placeholder="Selecione uma vara" />
      </SelectTrigger>
      <SelectContent>
        {courts.map((court) => (
          <SelectItem key={court.id.toString()} value={court.id.toString()}>
            {court.name}
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
        selectedCourt.indicators.map((indicator) => (
          <IndicatorView
            key={indicator.id + selectedCourt.id.toString()}
            indicator={indicator}
            igest={selectedCourt.igest.value}
          />
        ))}
    </div>
  );
}
