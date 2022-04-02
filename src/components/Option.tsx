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
  return (
    <button
      className="option"
      onClick={onClick}
      style={condition ? { backgroundColor: color, color: '#151932' } : {}}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Option;
