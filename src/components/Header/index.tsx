import React, { useCallback } from 'react';
import Image from 'next/image'
import Link from 'next/link';

import styled from './Header.module.css'
import Button from 'components/Button';

interface Props {
  path: string
}

const Header: React.FC<Props> = ({path}) => {

  const getNavClass = useCallback(
    (navPath: string) => {
      if (navPath === path) {
        return styled.active;
      }
      return '';
    },
    [path],
  )
  

  return (
    <header 
      id="header"
      className={styled.header}  
    >
      <div className={`${styled.container} container`}>
        <Link href="/">
          <a className={styled.logo}>
            <Image 
              src={require("assets/logo.svg")}
              alt="Logo from miami cash for cars"
            />
          </a>
        </Link>
        <nav className={styled.nav}>
          <Link href="/">
            <a className={getNavClass('/')}>
              HOME
            </a>
          </Link>
          <Link href="/sell-my-car">
            <a className={getNavClass('/sell-my-car')}>
              SELL
            </a>
          </Link>
          <Link href="/contact">
            <a className={getNavClass('/contact')}>
              CONTACT
            </a>
          </Link>
        </nav>
        <Button
          component='a'
          className={styled.callButton} 
          href="tel:+17026026697"
        >
          <Image 
            src={require("assets/icons/call.svg")}
            alt="Call icon"
            loading='eager'
          />
          <p>
            <span>call or text</span>
            <strong>702 602 6697</strong>
          </p>
        </Button>
      </div>
    </header>
  )
}

export default Header;