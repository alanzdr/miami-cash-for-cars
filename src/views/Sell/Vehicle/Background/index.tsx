import React from 'react';
import Image from 'next/image';
import { m, MotionProps } from 'framer-motion'

import styled from './HeroBackground.module.css'
import { getTransition } from 'utils/animation';

interface Props {
  topDownShowAnimation: (delay?: number) => MotionProps
}

const Background: React.FC<Props> = ({topDownShowAnimation}) => {
  return (
    <>
      <div className={styled.background}>
        <div className={styled.content}>
          <div className={styled.ground}>
            <div className={styled.groundFill}>
              <Image 
                src={require('assets/home/hero-ground.svg')}
                alt="floor made of lines"
                width={3377.96}
                height={237.62}
              />
            </div>
          </div>
          <div 
            className={styled.mountain}
          >
            <Image 
              src={require('assets/home/hero-mountain.svg')}
              alt="mountain made of lines"
              width={1171.8}
              height={316.17}
            />
          </div>
          <m.div 
            className={styled.sun}
            {...topDownShowAnimation(0.2)}
            variants={{
              hidden: { 
                x: '50%',
                y: '-46.4%'
              },
              visible: { y: '-76.4%' }
            }}
          >
            <Image 
              src={require('assets/home/hero-sun.svg')}
              alt="sun drawing in the background"
              width={917.881}
              height={627.696}
            />
          </m.div>
        </div>
      </div>
    </>
  )
}

export default Background;