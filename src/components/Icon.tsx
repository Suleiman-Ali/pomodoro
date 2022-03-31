interface IconProps {
  classes: string;
  backgroundColor?: string;
  color: string;
  onClick: () => void;
}

function Icon({
  classes,
  backgroundColor,
  color,
  onClick,
}: IconProps): JSX.Element {
  return (
    <i
      className={classes}
      style={{ color, backgroundColor }}
      onClick={onClick}
    ></i>
  );
}

export default Icon;
