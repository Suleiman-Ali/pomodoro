import Context from '../context';
import LabeledBox from './LabeledBox';
import Colors from './Colors';
import { useContext } from 'react';

function Model(): JSX.Element | null {
  const { model, submitHandler, pomodoroInput, sbInput, lbInput } =
    useContext(Context);

  if (!model) return null;

  return (
    <div className="model">
      <form className="form" onSubmit={submitHandler}>
        <button type="submit" className="bi bi-x-circle form__close"></button>

        <div className="form__box">
          <LabeledBox label="pomodoro" min={5} max={120} ref={pomodoroInput} />
          <LabeledBox label="short break" min={5} max={15} ref={sbInput} />
          <LabeledBox label="long break" min={5} max={30} ref={lbInput} />
        </div>

        <Colors />
      </form>
    </div>
  );
}

export default Model;
