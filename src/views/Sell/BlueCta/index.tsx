import React from 'react';
import Image from 'next/image'
import { m } from 'framer-motion'

import styled from './BlueCta.module.css'
import Button from 'components/Button';
import useScrollAnimation from 'hooks/useScrollAnimation';

const BlueCta: React.FC = () => {
  const { 
    topDownShowAnimation, 
    ref, 
  } = useScrollAnimation(0.7)
  
  return (
    <section 
      ref={ref}
      className={styled.bluecta}
    >
      <m.div 
        {...topDownShowAnimation()}
        className={`${styled.container} container`}
      >
        <p>
          Mauris ultrices nec turpis eu accuin purus sit amet tortor 
          rhoncus lobortis non sit amet eauris posueisem imperdiet 
          aesent malesuada, dui nec scelerisque feugiat, nunc tellus 
          suscipit amet ullamcorper augue.
        </p>
        <Button
          component='a'
          href="#quote"
        >
          <Image 
            src={require('assets/icons/quote.svg')}
            alt="Quote icon"
          />
          <p>get an instant quote</p>
        </Button>
      </m.div>
    </section>
  );
}

export default BlueCta;