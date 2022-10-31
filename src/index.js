import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< Updated upstream
import App from './components/App';
=======
import './index.css';
import App from './App';
>>>>>>> Stashed changes
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< Updated upstream
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// REMOVE BEFORE PRODUCTION //
reportWebVitals();
// REMOVE BEFORE PRODUCTION //
=======
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> Stashed changes
