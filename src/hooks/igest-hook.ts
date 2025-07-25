import {useState, useEffect} from 'react';
import igestData from '@/data/igest.json';
import {Quartile} from '@/types/quartile';

export default function useIgest() {
  const [igestQuartiles, setIgestQuartiles] = useState<Quartile | null>(null);

  useEffect(() => {
    const igestQuartiles: Quartile = {
      first: igestData.quartiles.first,
      second: igestData.quartiles.second,
      third: igestData.quartiles.third
    };
    setIgestQuartiles(igestQuartiles);
  }, []);

  return {igestQuartiles};
}
