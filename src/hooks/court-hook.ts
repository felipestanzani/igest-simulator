import {useState, useEffect} from 'react';
import courtsData from '@/data/courts.json';
import {Court} from '@/types/court';
import {getIgestByCourt, getIndicatorsByCourt} from '@/hooks/indicator-hook';

export default function useCourtsList() {
  const [courts, setCourts] = useState<Court[]>([]);

  useEffect(() => {
    const courts = getCourts();
    setCourts(courts);
  }, []);

  return {courts};
}

function getCourts() {
  return courtsData.map((court) => new Court(court.id, court.name, 0, []));
}

export function getCourt(id: number) {
  const courts = getCourts();
  const selectedCourt = courts.find((court) => court.id === id);

  if (!selectedCourt) {
    return null;
  }

  const indicators = getIndicatorsByCourt(selectedCourt?.name || '');

  return new Court(
    Number(id),
    selectedCourt?.name || '',
    getIgestByCourt(selectedCourt?.name || '').value,
    indicators
  );
}
