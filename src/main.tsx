import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';
import { initializeTheme } from './theme/theme';
import './styles/theme.css';
import './styles/global.css';

initializeTheme();

const root = document.getElementById('root');
if (!root) throw new Error('The application root is missing.');

ReactDOM.createRoot(root).render(<React.StrictMode><App /></React.StrictMode>);
