import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

import styled from './Footer.module.css'

const Footer: React.FC = () => {
  return (
    <footer id="footer" className={styled.footer}>
      <div className={`${styled.container} container`}>
        <Link href="/" className={styled.logo}>
          <Image 
            src={require("assets/logo.svg")}
            alt="Logo from miami cash for cars"
          />
        </Link>
        <p>
          © Copright 2023 Miami Cash For Cars
        </p>
      </div>
    </footer>
  )
}

export default Footer;