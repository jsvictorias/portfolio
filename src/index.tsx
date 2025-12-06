import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <LanguageProvider> 
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </LanguageProvider>
    </React.StrictMode>
);

reportWebVitals();