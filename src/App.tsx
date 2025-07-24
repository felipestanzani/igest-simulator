import IndicatorView from './components/indicator-view';
import useIgest from './hooks/igest-hook';
import {Indicator} from './types/indicator';

function App() {
  const {igest} = useIgest();

  const indicator = new Indicator('I01', 0.5, 0.5, igest, {
    id: 'I01',
    name: 'Idade Média do Pendente de Julgamento',
    quartiles: {
      first: 0.2,
      second: 0.5,
      third: 0.7
    },
    weight: 3
  });

  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <IndicatorView indicator={indicator} />
    </div>
  );
}

export default App;
