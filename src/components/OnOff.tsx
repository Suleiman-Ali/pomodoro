import Context from '../context';
import Icon from './Icon';
import { useContext } from 'react';

function OnOff(): JSX.Element | null {
  const { on, color, onChangeHandler } = useContext(Context);

  if (!on)
    return (
      <Icon
        classes="bi bi-play-fill onOff"
        color="#151932"
        backgroundColor={color}
        onClick={() => onChangeHandler(true)}
      />
    );

  if (on)
    return (
      <Icon
        classes="bi bi-pause-fill onOff"
        color="#151932"
        backgroundColor={color}
        onClick={() => onChangeHandler(false)}
      />
    );

  return null;
}

export default OnOff;
