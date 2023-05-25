import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './styles/settings/colors.css';
import './styles/settings/fonts.css';
import './styles/settings/sizes.css';
import './styles/settings/spacings.css';
import './styles/generics/normalize.css';

if (process.env.NODE_ENV !== 'production') {
	const axe = require('@axe-core/react');
	axe(React, ReactDOM, 1000);
}

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

if (process.env.NODE_ENV !== 'production') {
	const axe = require('@axe-core/react');
	axe(React, ReactDOM, 1000);
}

root.render(
	<React.StrictMode>
		<p>Adopet</p>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
