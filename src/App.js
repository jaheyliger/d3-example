import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChat';

function App() {
	return (
		<div className='App'>
			<div className='chart'>
				<BarChart />
			</div>
			<div className='chart'>
				<LineChart />
			</div>
		</div>
	);
}

export default App;
