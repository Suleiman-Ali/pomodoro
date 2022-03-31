import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface ProgressProps {
  text: string;
  percent: number;
  color: string;
}

function Progress({ color, percent, text }: ProgressProps): JSX.Element {
  return (
    <CircularProgressbar
      value={percent}
      text={text}
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
  );
}

export default Progress;
