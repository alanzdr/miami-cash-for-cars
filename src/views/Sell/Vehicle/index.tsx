import React, { useCallback } from 'react';
import Image from 'next/image'
import { m, MotionProps } from 'framer-motion'

import styled from './Vehicle.module.css'
import Background from './Background';
import { getTransition } from 'utils/animation';
import useScrollAnimation from 'hooks/useScrollAnimation';

const Vehicle: React.FC = () => {
  const { 
    topDownShowAnimation, 
    ref, 
  } = useScrollAnimation()

  return (
    <section ref={ref} className={styled.hero}>
      <div className={`${styled.container} container`}>
        <Background topDownShowAnimation={topDownShowAnimation} />
        <div className={styled.text}>
          <m.div className={styled.topBox}
            {...topDownShowAnimation()}
          >
            <strong>
              #
              <span>1</span>
            </strong>
            <p>
              Lorem <span>ipsum dolor</span>
            </p>
          </m.div>
          <m.h1
            {...topDownShowAnimation(0.2)}
          >
            Pellentesque scelerisros venen vestibulum ligeem
          </m.h1>
          <m.p
            {...topDownShowAnimation(0.4)}
          >
            Pellentesque scelerisque nunc entesque scelerit 
            eros venen vestibuoin ac sem finibus, auctor 
            quam eu, pretiumn ex sapie veor quam eu, pretium 
            enean ex sapien, suscipit nec enicidunt.
          </m.p>
        </div>
        <m.div 
          className={styled.image}
          {...topDownShowAnimation()}
          variants={{
            hidden: { 
              x: 200, 
              scale: 0.8
            },
            visible: { x: 0, y: 0, scale: 1 }
          }}
          transition={getTransition({
            stiffness: 80
          })}
        >
          <Image 
            src={require('assets/sell/vehicle.png')}
            alt="Image of a white car"
            quality={90}
          />
        </m.div>
      </div>
    </section>
  )
}

export default Vehicle;