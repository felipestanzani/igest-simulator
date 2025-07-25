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
import {useState, useMemo} from 'react';
import IgestView from '@/components/igest-view';
import {Igest} from '@/types/igest';
import Legend from '@/components/legend';
import useCourts, {getCourt} from '@/hooks/court-hook';

export default function App() {
  const {courts} = useCourts();
  const {igestQuartiles} = useIgest();
  const [selectedCourt, setSelectedCourt] = useState<Court | null>(null);
  const [igest, setIgest] = useState<Igest | null>(null);
  // New: state for indicator values
  const [indicatorValues, setIndicatorValues] = useState<
    Record<string, number>
  >({});

  function handleCourtChange(courtId: string) {
    const court = getCourt(Number(courtId));
    setSelectedCourt(court);
    if (court) {
      setIgest(court.igest);
      // Reset indicator values for new court
      const values: Record<string, number> = {};
      court.indicators.forEach((indicator) => {
        values[indicator.id] = indicator.initialValue;
      });
      setIndicatorValues(values);
    }
  }

  // New: update indicator value in state
  function handleIndicatorValueChange(indicatorId: string, value: number) {
    setIndicatorValues((prev) => ({...prev, [indicatorId]: value}));
  }

  // New: update indicators' values before calculating simulated IGEST
  const simulatedIgest = useMemo(() => {
    if (!selectedCourt) return null;
    selectedCourt.indicators.forEach((indicator) => {
      if (indicatorValues[indicator.id] !== undefined) {
        indicator.setCurrentValue(indicatorValues[indicator.id]);
      }
    });
    return selectedCourt.getSimulatedIgest();
  }, [selectedCourt, indicatorValues]);

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8">
      <div className="flex flex-row items-center justify-center space-x-4">
        {selectedCourt?.igest && igest && igestQuartiles && (
          <IgestView title="IGEST" igest={igest} quartile={igestQuartiles} />
        )}
        {selectedCourt && igestQuartiles && simulatedIgest && (
          <IgestView
            title="IGEST Simulado"
            igest={simulatedIgest}
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
        <Indicators
          selectedCourt={selectedCourt}
          indicatorValues={indicatorValues}
          onIndicatorValueChange={handleIndicatorValueChange}
        />
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

function Indicators({
  selectedCourt,
  indicatorValues,
  onIndicatorValueChange
}: {
  selectedCourt: Court | null;
  indicatorValues: Record<string, number>;
  onIndicatorValueChange: (indicatorId: string, value: number) => void;
}) {
  return (
    <div className="flex flex-col items-left justify-center w-2xl space-y-1">
      {selectedCourt &&
        selectedCourt.indicators.map((indicator) => (
          <IndicatorView
            key={indicator.id + selectedCourt.id.toString()}
            indicator={indicator}
            igest={selectedCourt.igest.value}
            value={indicatorValues[indicator.id] ?? indicator.initialValue}
            onValueChange={(value: number) =>
              onIndicatorValueChange(indicator.id, value)
            }
          />
        ))}
    </div>
  );
}
