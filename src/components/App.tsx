import Audio from './Audio';
import Options from './Options';
import ProgressBox from './ProgressBox';
import OnOff from './OnOff';
import Model from './Model';

function App(): JSX.Element {
  return (
    <div className="app">
      <Audio />
      <Options />
      <ProgressBox />
      <OnOff />
      <Model />
    </div>
  );
}

export default App;
