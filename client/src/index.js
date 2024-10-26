import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Keep your existing styles
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ExpenseProvider } from './context/ExpenseContext'; // Import your context

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ExpenseProvider> {/* Wrap App with ExpenseProvider to provide context */}
      <App />
    </ExpenseProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
