import React, { useMemo } from 'react';

import Link from 'next/link';
import styled from './Button.module.css';

interface ButtonProps
extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  component?: 'button',
  ref?: React.RefObject<HTMLButtonElement>
}

interface AnchorProps
extends React.AnchorHTMLAttributes<HTMLAnchorElement>{
  component?: 'a',
  ref?: React.RefObject<HTMLAnchorElement>
  href: string
}

type Props = (ButtonProps | AnchorProps)

const Button: React.FC<Props> = ({
  component = 'button',
  className,
  children,
  ...rest
}) => {
  const buttonClassName = useMemo(() => {
    let name = styled.button;
    if (className) {
      name += ` ${className}`;
    }
    return name;
  }, [className]);

  if (component === 'button') {
    const props = rest as ButtonProps;
    return (
      <button
        className={buttonClassName}
        ref={props.ref}
        {...props}
      >
        {children}
      </button>
    );
  }

  if (component === 'a') {
    const props = rest as AnchorProps;
    return (
      <Link 
        className={buttonClassName}
        ref={props.ref}
        {...props}
      >
        {children}
      </Link>
    );
  }
  return null;
};

export default Button;
