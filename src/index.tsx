import { StrictMode } from 'react';
import { render } from 'react-dom';
import { ContextProvider } from './context';
import App from './components/App';
import './styles/index.scss';

render(
  <ContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ContextProvider>,
  document.getElementById('root')
);
