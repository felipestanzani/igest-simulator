import {useState} from 'react';

export default function useIgest() {
  const [igest, setIgest] = useState(0.5);

  return {igest};
}
