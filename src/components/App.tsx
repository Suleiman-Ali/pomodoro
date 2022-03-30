import { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const colors = [
  '#20ab8a',
  '#0f76ca',
  '#e26970',
  '#FC6E72',
  '#fcbc04',
  '#6b51f3',
  '#fa5788',
  '#e92a64',
];

function App(): JSX.Element {
  const [option, setOption] = useState<number>(1);
  const [color, setColor] = useState<string>(colors[1]);
  const [on, setOn] = useState<boolean>(false);

  return (
    <div className="app">
      <div className="options">
        <button
          className={`option`}
          onClick={() => setOption(1)}
          style={
            option === 1 ? { backgroundColor: color, color: '#151932' } : {}
          }
        >
          pomodoro
        </button>
        <button
          className={`option`}
          onClick={() => setOption(2)}
          style={
            option === 2 ? { backgroundColor: color, color: '#151932' } : {}
          }
        >
          short break
        </button>
        <button
          className={`option`}
          onClick={() => setOption(3)}
          style={
            option === 3 ? { backgroundColor: color, color: '#151932' } : {}
          }
        >
          long break
        </button>
      </div>

      <div className="progress">
        <CircularProgressbar
          value={80}
          text={'00:00'}
          background={true}
          backgroundPadding={5}
          strokeWidth={3}
          styles={buildStyles({
            strokeLinecap: 'butt',
            backgroundColor: '#151932',
            trailColor: '#151932',
            pathColor: color,
            textColor: color,
            textSize: '25px',
          })}
        />
        <i className="bi bi-gear-fill settings" style={{ color: color }}></i>
      </div>

      {!on && (
        <i
          className="bi bi-play-fill onOff"
          style={{ backgroundColor: color, color: '#151932' }}
          onClick={() => setOn(true)}
        ></i>
      )}

      {on && (
        <i
          className="bi bi-pause-fill onOff"
          style={{ backgroundColor: color, color: '#151932' }}
          onClick={() => setOn(false)}
        ></i>
      )}
    </div>
  );
}

export default App;
