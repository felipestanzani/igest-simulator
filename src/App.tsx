import IndicatorView from './components/indicator-view';
import useIgest from './hooks/igest-hook';
import {Indicator} from './types/indicator';

function App() {
  const {igest} = useIgest();

  const indicator = new Indicator('I01', 0.5, 0.5);

  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <IndicatorView indicator={indicator} igest={igest} />
    </div>
  );
}

export default App;
