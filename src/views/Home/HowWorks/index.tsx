import React from 'react';
import Image from 'next/image'
import { m } from 'framer-motion'

import styled from './HowWorks.module.css'
import useScrollAnimation from 'hooks/useScrollAnimation';

const HowWorks: React.FC = () => {
  const { ref, topDownShowAnimation } = useScrollAnimation()
  
  return (
    <section ref={ref} className={styled.howworks}>
      <div className={`${styled.container} container`}>
        <m.div 
          className={styled.image}
          {...topDownShowAnimation()}
        >
          <div className={styled.imageContainer}>
            <Image 
              src={require('assets/home/howworks-money.png')}
              alt="pile of money"
            />
          </div>
        </m.div>
        <div className={styled.text}>
          <m.h2 {...topDownShowAnimation(0.2)}>
            How it works
          </m.h2>
          <m.strong {...topDownShowAnimation(0.4)}>
            <span>Get paid </span>cash on the spot
          </m.strong>
          <m.ul {...topDownShowAnimation(0.6)}>
            <li>
              <strong>1</strong>
              <p>
                <span>We </span>
                pickup the vehicle
              </p>
            </li>
            <li>
              <strong>2</strong>
              <p>
                <span>We pay you </span>
                cash on the spot
              </p>
            </li>
            <li>
              <strong>3</strong>
              <p>
                <span>We handle the </span>
                DMV paperwork
              </p>
            </li>
          </m.ul>
          <m.p {...topDownShowAnimation(0.8)}>
            Pellentesque scelerisque nunc allentesque scelerisque 
            nunc at eros venen vestibuoin ac sem finibus, auctor 
            quam eu, pretium enean ex sapien, suscipit nec enicidunt.
            os venen vestibuoin ac sem finibus, auctor quam eu, 
            pretium enean ex sapien, suscipit nec enicidunt.
          </m.p>
        </div>
      </div>
    </section>
  )
}

export default HowWorks;