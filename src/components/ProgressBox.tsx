import Progress from './Progress';
import Icon from './Icon';
import Context from '../context';
import { useContext } from 'react';

function ProgressBox(): JSX.Element {
  const { color, modelChangeHandler, getCurrent, on } = useContext(Context);
  const [text, percent] = getCurrent();

  return (
    <div className="progress">
      <Progress text={text} percent={+percent} color={color} />
      {!on && (
        <Icon
          classes="bi bi-gear-fill settings"
          color={color}
          onClick={() => modelChangeHandler(true)}
        />
      )}
    </div>
  );
}

export default ProgressBox;
