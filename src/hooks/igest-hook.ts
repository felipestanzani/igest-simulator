import {useState, useEffect} from 'react';
import igestData from '@/data/igest.json';
import {Igest} from '@/types/igest';
import {Quartile} from '@/types/quartile';

export default function useIgest() {
  const [igestRef, setIgestRef] = useState<Igest | null>(null);

  useEffect(() => {
    const quartiles: Quartile = {
      first: igestData.quartiles.first,
      second: igestData.quartiles.second,
      third: igestData.quartiles.third
    };
    const igestObj = new Igest(igestData.value, quartiles);
    setIgestRef(igestObj);
  }, []);

  return {igestRef};
}
