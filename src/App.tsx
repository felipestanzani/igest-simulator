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

function App() {
  const {igest} = useIgest();
  const [selectedCourt, setSelectedCourt] = useState<Court | null>(null);

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
  }

  return (
    <div className="flex flex-col items-left justify-center space-y-2">
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
    </div>
  );
}

export default App;
