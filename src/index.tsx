import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from './pages/LoginPage';
import reportWebVitals from './reportWebVitals';
//style sheets
import './styles/settings/settings.css';
import './styles/generics/normalize.css';
import './styles/elements/base.css';
import './styles/globals/globals.css';
import { Footer, Header } from './components';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import PetsPage from './pages/PetsPage';
import SentMessagePage from './pages/SentMessagePage';
import ProfileEditPage from './pages/ProfileEditPage';

if (process.env.NODE_ENV !== 'production') {
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const axe = require('@axe-core/react');
	axe(React, ReactDOM, 1000);
}

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);


root.render(
	<React.StrictMode>
		<ProfileEditPage/>
		<Footer />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
