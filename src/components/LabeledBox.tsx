import { forwardRef } from 'react';

interface LabeledBoxProps {
  label: string;
  min: number;
  max: number;
}

const LabeledBox = forwardRef<HTMLInputElement, LabeledBoxProps>(
  ({ label, max, min }, ref) => {
    return (
      <div className="labeledBox">
        <label htmlFor={label} className="form__label">
          {label}
        </label>

        <input
          type="number"
          className="form__input"
          placeholder="min"
          id={label}
          min={min}
          max={max}
          ref={ref}
        />
      </div>
    );
  }
);

export default LabeledBox;
