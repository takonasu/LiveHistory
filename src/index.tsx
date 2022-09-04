import Stack from '@mui/material/Stack';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { Footer } from './components/Footer';
import { TopBar } from './components/TopBar';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<Stack spacing={2}>
			<TopBar>ライブ参加履歴</TopBar>
			<App />
			<Footer />
		</Stack>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
