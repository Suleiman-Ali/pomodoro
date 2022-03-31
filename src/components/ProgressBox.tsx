import Progress from './Progress';
import Icon from './Icon';
import Context from '../context';
import { useContext } from 'react';

function ProgressBox(): JSX.Element {
  const { color, modelChangeHandler, option, getCurrent } = useContext(Context);
  let [current, CURRENT] = getCurrent(option);
  let minutes = `${Math.floor(current / 60)}`.padStart(2, '0');
  let preSeconds = Math.round(+`0.${`${current / 60}`.split('.')[1]}` * 60);
  let seconds = !preSeconds ? '00' : `${preSeconds}`.padStart(2, '0');
  const text = `${minutes}:${seconds}`;
  const percent = ((CURRENT - current) / CURRENT) * 100;

  return (
    <div className="progress">
      <Progress text={text} percent={percent} color={color} />
      <Icon
        classes="bi bi-gear-fill settings"
        color={color}
        onClick={() => modelChangeHandler(true)}
      />
    </div>
  );
}

export default ProgressBox;
