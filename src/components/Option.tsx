interface OptionProps {
  condition: boolean;
  color: string;
  text: string;
  disabled: boolean;
  onClick: () => void;
}

function Option({
  condition,
  color,
  text,
  onClick,
  disabled,
}: OptionProps): JSX.Element {
  const styles = condition ? { backgroundColor: color, color: '#151932' } : {};
  return (
    <button
      className="option"
      onClick={onClick}
      style={styles}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Option;
