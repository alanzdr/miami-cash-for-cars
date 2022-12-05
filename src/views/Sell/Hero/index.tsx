import { m, MotionProps } from 'framer-motion';
import React, { useCallback } from 'react';
import { getTransition } from 'utils/animation'

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
            Sectetur adipiscing elitorbi vestibulum
            eget massa at bibendu ullam soda
          </m.h1>
          <div className={styled.botText}>
            <m.p {...getAnimationProps(0.4)}>
              Pellentesque scelerisque nunc allentesque scelerisque 
              nunc at eros venen vestibuoin ac sem finibus, auctor 
              quam eu, pretium enean ex sapien, suscipit nec enicidu ve.
            </m.p>
            <m.p 
            className={styled.botTextBox}
              {...getAnimationProps(0.6)}
            >
              <span className={styled.bigText}>
                Your
                <strong> vehicle </strong>
                into
                <strong> instant cash </strong>
              </span>
              <span className={styled.bars}>{"///"}</span>
              it&apos;s that simple!
            </m.p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;