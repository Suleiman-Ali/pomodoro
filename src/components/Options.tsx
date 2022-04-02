import Context from '../context';
import Option from './Option';
import { useContext } from 'react';

function Options(): JSX.Element {
  const { option, color, optionChangeHandler, on } = useContext(Context);

  return (
    <div className="options">
      <Option
        text="pomodoro"
        color={color}
        condition={option === 1}
        onClick={() => optionChangeHandler(1)}
        disabled={on && option !== 1}
      />
      <Option
        text="short break"
        color={color}
        condition={option === 2}
        onClick={() => optionChangeHandler(2)}
        disabled={on && option !== 2}
      />
      <Option
        text="long break"
        color={color}
        condition={option === 3}
        onClick={() => optionChangeHandler(3)}
        disabled={on && option !== 3}
      />
    </div>
  );
}

export default Options;
