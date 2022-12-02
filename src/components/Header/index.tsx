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
        <Link href="/" className={styled.logo}>
          <Image 
            src={require("assets/logo.svg")}
            alt="Logo from miami cash for cars"
          />
        </Link>
        <nav className={styled.nav}>
          <Link href="/" className={getNavClass('/')}>
            HOME
          </Link>
          <Link href="/sell-my-car" className={getNavClass('/sell-my-car')}>
            SELL
          </Link>
          <Link href="/contact" className={getNavClass('/contact')}>
            CONTACT
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