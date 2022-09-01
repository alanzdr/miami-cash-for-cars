import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useCallback,
} from 'react';

import styled from './styles.module.css';

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string,
  name: string,
  options: string[],
  notifyChange?: (value: string) => void
}

export interface SelectREF {
  value: string
  setValue: (value: string) => void
}

const Select: React.ForwardRefRenderFunction<SelectREF, Props> = ({
  label,
  name,
  options,
  notifyChange,
  ...rest
}, ref) => {
  const [value, setValue] = useState('');

  useImperativeHandle(ref, () => {
    return {
      value,
      setValue,
    };
  });

  const inFocus = !!value;

  const onChangeValue = useCallback(
      (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setValue(value);
        if (notifyChange) {
          notifyChange(value);
        }
      },
      [notifyChange],
  );


  return (
    <div className={`${styled.container} ${inFocus && styled.inFocus}`}>
      <label htmlFor={`select-${name}`}>{label}</label>
      <select
        id={`select-${name}`}
        name={name}
        value={value}
        onChange={onChangeValue}
        required
        {...rest}
      >
        <option></option>
        {options.map((value) => (
          <option key={value} value={value}>{value}</option>
        ))}
      </select>
      <svg
        className={styled.selectArrow}
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        width="24"
      >
        <path fill="currentColor" d="M12 15 7 10H17Z"/>
      </svg>
    </div>
  );
};

export default forwardRef(Select);
