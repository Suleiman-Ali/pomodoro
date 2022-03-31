import Options from './Options';
import ProgressBox from './ProgressBox';
import OnOff from './OnOff';
import Model from './Model';
import { ContextProvider } from '../context';

function App(): JSX.Element {
  return (
    <ContextProvider>
      <div className="app">
        <Options />
        <ProgressBox />
        <OnOff />
        <Model />
      </div>
    </ContextProvider>
  );
}

export default App;
