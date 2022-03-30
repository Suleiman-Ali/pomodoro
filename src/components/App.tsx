import { FormEvent, FormEventHandler, useRef, useState } from 'react';
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
  const [pomodoro, setPomodoro] = useState<number>(25);
  const [sb, setSB] = useState<number>(5);
  const [lb, setLB] = useState<number>(10);
  const [option, setOption] = useState<number>(1);
  const [color, setColor] = useState<string>(colors[1]);
  const [on, setOn] = useState<boolean>(false);
  const [model, setModel] = useState<boolean>(false);
  const pomodoroInput = useRef<HTMLInputElement>(undefined!);
  const sbInput = useRef<HTMLInputElement>(undefined!);
  const lbInput = useRef<HTMLInputElement>(undefined!);

  const submitHandler: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (pomodoroInput.current.value) setPomodoro(+pomodoroInput.current.value);
    if (sbInput.current.value) setSB(+sbInput.current.value);
    if (lbInput.current.value) setLB(+lbInput.current.value);
    setModel(false);
  };

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
          backgroundPadding={1.5}
          strokeWidth={1.5}
          styles={buildStyles({
            strokeLinecap: 'butt',
            backgroundColor: '#151932',
            trailColor: '#151932',
            pathColor: color,
            textColor: color,
            textSize: '25px',
          })}
        />
        <i
          className="bi bi-gear-fill settings"
          style={{ color: color }}
          onClick={() => setModel(true)}
        ></i>
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

      {model && (
        <div className="model">
          <form className="form" onSubmit={submitHandler}>
            <button
              type="submit"
              className="bi bi-x-circle form__close"
            ></button>
            <div className="form__box">
              <div className="labeledBox">
                <label htmlFor="pomodoro" className="form__label">
                  pomodoro
                </label>
                <input
                  type="number"
                  id="pomodoro"
                  min={5}
                  max={120}
                  className="form__input"
                  placeholder="min"
                  ref={pomodoroInput}
                />
              </div>
              <div className="labeledBox">
                <label htmlFor="short break" className="form__label">
                  short break
                </label>
                <input
                  type="number"
                  id="short break"
                  min={5}
                  max={15}
                  className="form__input"
                  placeholder="min"
                  ref={sbInput}
                />
              </div>
              <div className="labeledBox">
                <label htmlFor="long break" className="form__label">
                  long break
                </label>
                <input
                  type="number"
                  id="long break"
                  min={5}
                  max={30}
                  className="form__input"
                  placeholder="min"
                  ref={lbInput}
                />
              </div>
            </div>
            <div className="colors">
              {colors.map((c) => (
                <div
                  className="color"
                  style={{ backgroundColor: c }}
                  key={c}
                  onClick={() => setColor(c)}
                >
                  {c === color ? <i className="bi bi-check-circle"></i> : null}
                </div>
              ))}
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
