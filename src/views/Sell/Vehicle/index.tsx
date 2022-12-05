import React, { useCallback } from 'react';
import Image from 'next/image'
import { m, MotionProps } from 'framer-motion'

import Button from 'components/Button';
import styled from './Vehicle.module.css'
import Background from './Background';
import { getTransition } from 'utils/animation';

const Vehicle: React.FC = () => {
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
        <Background />
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
            Sed dignissim sum non fermentu miam 
          </m.h1>
          <m.p
            {...getAnimationProps(0.4)}
          >
            Pellentesque scelerisque nunc at eros venen 
            vestibulum liged consequat commodo oroin ac 
            sem finibus, auctor quam eu, pretium enean 
            ex sapien, suscipit nec enim ut, tincidunt.
          </m.p>
          <m.div 
            {...getAnimationProps(0.6)}
            className={styled.button}
          >
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

export default Vehicle;