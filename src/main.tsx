import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


const rootElement = document.getElementById('root');
if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);

	root.render(
		<BrowserRouter>
				<App />
		</BrowserRouter>
	);
}