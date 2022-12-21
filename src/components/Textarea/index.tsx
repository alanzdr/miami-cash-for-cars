import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useImperativeHandle,
  TextareaHTMLAttributes,
} from 'react';

import styled from './styles.module.css';
import { maskValue, InputMaskType } from 'utils/mask';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string,
  mask?: InputMaskType,
  notifyChange?: (value: string) => void
  hideOptionalLabel?: boolean
}

export interface TextAreaRef {
  value: string,
  setValue: (value: string) => void,
  setError: (error: string) => void,
  input?: HTMLTextAreaElement
}

const Input: React.ForwardRefRenderFunction<TextAreaRef, Props> = ({
  label,
  required,
  mask,
  children,
  notifyChange,
  hideOptionalLabel,
  ...rest
}, ref) => {
  const [input, setInput] = useState<HTMLTextAreaElement>();
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [inFocus, setFocus] = useState(false);
  const name = useMemo(() => {
    if (rest.name) {
      return rest.name;
    }
    return label.toLocaleLowerCase().replace(/ /g, '-');
  }, [label, rest.name]);

  const onRefSetValue = useCallback((value: string) => {
    setValue(value);
    setFocus(!!value);
  }, []);

  const onRefSetError = useCallback((error: string) => {
    setError(error);
    if (error) {
      input?.focus();
      setFocus(true);
    }
  }, [input]);

  useImperativeHandle(
      ref,
      () => ({
        value,
        setValue: onRefSetValue,
        setError: onRefSetError,
        input,
      }),
      [value, input, onRefSetValue, onRefSetError],
  );

  const inputRef = useCallback(
      (item: HTMLTextAreaElement) => {
        setInput(item);
      },
      [],
  );

  useEffect(() => {
    if (!input) return;

    const onFocus = () => {
      setFocus(true);
    };

    const onFocusOut = () => {
      if (input.type === 'date') {
        return;
      } else if (!input.value || !input.value.length) {
        setFocus(false);
      }
    };

    input.addEventListener('focus', onFocus);
    input.addEventListener('focusout', onFocusOut);

    if (input.value || input.type === 'date') {
      onFocus();
    }

    return () => {
      input.removeEventListener('focus', onFocus);
      input.removeEventListener('focusout', onFocusOut);
    };
  }, [input]);

  useEffect(() => {
    if (!input || mask === undefined) return;
    const onBlur = () => {
      input.value = maskValue(mask, input.value);
    };
    input.addEventListener('blur', onBlur);
    return () => {
      input.removeEventListener('blur', onBlur);
    };
  }, [input, mask]);

  const onChangeValue = useCallback(
      (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (notifyChange) {
          notifyChange(ev.target.value);
        }
        if (mask) {
          setValue(maskValue(mask, ev.target.value));
        } else {
          setValue(ev.target.value);
        }
      },
      [notifyChange, mask]);

  return (
    <div className={`${styled.container} ${inFocus && styled.inFocus}`}>
      <label htmlFor={`input-${name}`}>{label}</label>
      <textarea 
        ref={inputRef as React.LegacyRef<HTMLTextAreaElement> }
        id={`input-${name}`}
        name={name}
        value={value}
        onChange={onChangeValue}
        required={required === false ? undefined : true}
        {...rest}
      />
      {(required === false && !hideOptionalLabel) && (
        <span>campo opcional</span>
      )}
      {error ? (
        <span className={styled.error}>{error}</span>
      ) : children}
    </div>
  );
};

export default React.forwardRef(Input);
