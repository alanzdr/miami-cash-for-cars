import React, { useState, useCallback } from 'react';
import Button from 'components/Button';
import Image from 'next/image';

import styled from './MobileMenu.module.css'
import Link from 'next/link';

interface Props {
  path: string
}

const MobileMenu: React.FC<Props> = ({path}) => {
  const [isOpened, setOpened] = useState(false)

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
    <>
      <div className={styled.header}>
        <button 
          className={`${styled.hamburger} hamburger hamburger--spin ${isOpened ? 'is-active' : ''}`} 
          type="button"
          onClick={() => setOpened(!isOpened)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
          <p>MENU</p>
        </button>
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
      <div className={`${styled.menu} ${isOpened ? styled.opened : ''}`}>
        <nav className={styled.nav}>
          <Link 
            href="/" 
            className={getNavClass('/')} 
            onClick={() => setOpened(false)}
          >
            HOME
          </Link>
          <Link 
            href="/sell-my-car" 
            className={getNavClass('/sell-my-car')}
            onClick={() => setOpened(false)}
          >
            SELL
          </Link>
          <Link 
            href="/contact" 
            className={getNavClass('/contact')}
            onClick={() => setOpened(false)}
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </>
  );
}

export default MobileMenu;