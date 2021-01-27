import './App.scss';
import MetricCard from './components/MetricCard';
import DivisionSummaryCard from './components/DivisionSummaryCard';

const App = () => {
  return (
    <div className="App">
      <MetricCard />
      <DivisionSummaryCard />
      <h3>FE Engineering Task</h3>
      Welcome to React
    </div>
  );
}

export default App;
