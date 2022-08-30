import React from 'react';
import Image from 'next/image'
import { m } from 'framer-motion'

import styled from './Points.module.css'
import useScrollAnimation from 'hooks/useScrollAnimation';

const Points: React.FC = () => {
  const { ref, topDownShowAnimation } = useScrollAnimation()
  
  return (
    <section ref={ref} className={styled.points}>
      <div className={`${styled.container} container`}>
        <m.div 
          className={styled.item}
          {...topDownShowAnimation()}
        >
          <div className={styled.icon}>
            <Image 
              src={require('assets/icons/quote-purple.svg')}
              alt="Quote icon"
            />
          </div>
          <h3>
            We <strong>beat any offer</strong> from the competition!
          </h3>
          <p>
            Pellentesque scelerisque nunc at eros venen vestibuoin 
            ac sem finibus, auctor quam eu, pretium enean ex sapien, 
            suscipit nec enicidunt.
          </p>
          <a href="#quote">
            Learn more
          </a>
        </m.div>
        <m.div 
          className={styled.item}
          {...topDownShowAnimation(0.3)}
        >
          <div className={styled.icon}>
            <Image 
              src={require('assets/icons/quote-purple.svg')}
              alt="Quote icon"
            />
          </div>
          <h3>
            We <strong>beat any offer</strong> from the competition!
          </h3>
          <p>
            Pellentesque scelerisque nunc at eros venen vestibuoin 
            ac sem finibus, auctor quam eu, pretium enean ex sapien, 
            suscipit nec enicidunt.
          </p>
          <a href="#quote">
            Learn more
          </a>
        </m.div>
        <m.div 
          className={styled.item}
          {...topDownShowAnimation(0.6)}
        >
          <div className={styled.icon}>
            <Image 
              src={require('assets/icons/quote-purple.svg')}
              alt="Quote icon"
            />
          </div>
          <h3>
            We <strong>beat any offer</strong> from the competition!
          </h3>
          <p>
            Pellentesque scelerisque nunc at eros venen vestibuoin 
            ac sem finibus, auctor quam eu, pretium enean ex sapien, 
            suscipit nec enicidunt.
          </p>
          <a href="#quote">
            Learn more
          </a>
        </m.div>
      </div>
    </section>
  )
}

export default Points;