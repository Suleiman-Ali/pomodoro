import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ContextProvider } from './context';
import './styles/index.scss';

ReactDOM.render(
  <ContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ContextProvider>,
  document.getElementById('root')
);
