import IndicatorView from './components/indicator-view';

function App() {
  const indicator = {
    id: '1',
    initialValue: 0.5,
    currentValue: 0.5,
    impact: 0.5
  };

  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <IndicatorView indicator={indicator} />
    </div>
  );
}

export default App;
