interface OptionProps {
  condition: boolean;
  color: string;
  text: string;
  onClick: () => void;
}

function Option({ condition, color, text, onClick }: OptionProps): JSX.Element {
  return (
    <button
      className="option"
      onClick={onClick}
      style={condition ? { backgroundColor: color, color: '#151932' } : {}}
    >
      {text}
    </button>
  );
}

export default Option;
