import Context from '../context';
import songSrc from '../alarm.wav';
import { useContext } from 'react';

function Audio(): JSX.Element {
  const { audio } = useContext(Context);
  return <audio src={songSrc} ref={audio} />;
}

export default Audio;
