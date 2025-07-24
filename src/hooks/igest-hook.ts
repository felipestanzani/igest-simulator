import {useState, useEffect} from 'react';
import igestData from '@/data/igest.json';
import {Igest} from '@/types/igest';
import {Quartile} from '@/types/quartile';

export default function useIgest() {
  const [igest, setIgest] = useState<Igest | null>(null);

  useEffect(() => {
    const quartiles: Quartile = {
      first: igestData.quartiles.first,
      second: igestData.quartiles.second,
      third: igestData.quartiles.third
    };
    const igestObj = new Igest(igestData.value, quartiles);
    setIgest(igestObj);
  }, []);

  return {igest};
}
