import Context from '../context';
import { useContext } from 'react';

function Colors(): JSX.Element {
  const { colors, color, selectColor } = useContext(Context);

  return (
    <div className="colors">
      {colors.map((c) => (
        <div
          key={c}
          className="color"
          style={{ backgroundColor: c }}
          onClick={() => selectColor(c)}
        >
          {c === color ? <i className="bi bi-check-circle"></i> : null}
        </div>
      ))}
    </div>
  );
}

export default Colors;
