import { m, MotionProps } from 'framer-motion';
import React, { useCallback } from 'react';
import { getTransition } from 'utils/animation';
import Contact from './Contact';

import styled from './Hero.module.css'

const Hero: React.FC = () => {
  const getAnimationProps = useCallback(
    (delay = 0): MotionProps => {
      return {
        initial: "initial",
        animate: "animate",
        variants: {
          initial: { opacity: 0, x: 40 },
          animate: { opacity: 1, x: 0 }
        },
        transition: getTransition({delay})
      }
    },
    [],
  )
  
  return (
    <section className={styled.hero}>
      <div className={`${styled.container} container`}>
        <div className={styled.text}>
          <m.div className={styled.topBox}
            {...getAnimationProps()}
          >
            <strong>
              #
              <span>1</span>
            </strong>
            <p>
              Lorem <span>ipsum dolor</span> sit amet!
            </p>
          </m.div>
          <m.h1
            {...getAnimationProps(0.2)}
          >
            Fill in this form to contact us and we’ll respond 
            to you as quickly as possible
          </m.h1>
          <m.p
            {...getAnimationProps(0.4)}
          >
          Please verify that all of your information is correct to avoid delays.
          </m.p>
        </div>
        <m.div className={styled.contact} {...getAnimationProps(0.6)}>
          <Contact />
        </m.div>
      </div>
    </section>
  )
}

export default Hero;