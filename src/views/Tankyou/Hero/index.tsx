import React, { useCallback } from 'react';
import Image from 'next/image'
import { m, MotionProps } from 'framer-motion'

import Button from 'components/Button';
import styled from './Hero.module.css'
import Background from './Background';
import { getTransition } from 'utils/animation';

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
  // 

  return (
    <section className={styled.hero}>
      <div className={`${styled.container} container`}>
        <Background />
        <div className={styled.text}>
          <m.div className={styled.topBox}
            {...getAnimationProps()}
          >
            <p>
              Tank <span>you</span>
            </p>
          </m.div>
          <m.h1
            {...getAnimationProps(0.2)}
          >
            Thanks for contacting us!
          </m.h1>
          <m.p
            {...getAnimationProps(0.4)}
          >
            We will get in touch with you shortly.
          </m.p>
        </div>
        <m.div 
          className={styled.image}
          initial="initial"
          animate="animate"
          variants={{
            initial: { 
              x: 200, 
              scale: 0.8
            },
            animate: { x: 0, y: 0, scale: 1 }
          }}
          transition={getTransition({
            stiffness: 80
          })}
        >
          <Image 
            src={require('assets/home/hero-car.png')}
            alt="Image of a blue car"
            quality={90}
          />
        </m.div>
      </div>
    </section>
  )
}

export default Hero;