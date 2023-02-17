import './App.css';
import { Outlet } from 'react-router-dom';
import Navigation from './public-components/navigation';
function App() {
	return (
		<div className="App my-bg-theme">
			<Navigation />
			<Outlet />
		</div>
	);
}

export default App;
