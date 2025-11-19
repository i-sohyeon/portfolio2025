import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';

// hashRouter용: 해시가 없으면 자동으로 '#/' 붙이기
if (!window.location.hash) {
  window.location.replace(window.location.href + '#/');
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
