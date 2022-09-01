import React from 'react';
import Image from 'next/image'
import { m } from 'framer-motion'

import styled from './EndSession.module.css'
import useScrollAnimation from 'hooks/useScrollAnimation';

const EndSession: React.FC = () => {
  const { ref, topDownShowAnimation } = useScrollAnimation()
  
  return (
    <section ref={ref} className={styled.endsession}>
      <div className={`${styled.container} container`}>
        <div className={styled.image}>
          <div>
            <m.div 
              className={styled.sun}
              {...topDownShowAnimation(0.2)}
              variants={{
                hidden: { 
                  opacity: 0,
                  y: 80
                },
                visible: { y: 0, opacity: 1 }
              }}
            >
              <Image 
                src={require('assets/home/endsession-sun.svg')}
                alt="sun drawing in the background"
                width={627.907}
                height={482.707}
              />
            </m.div>
            <m.div 
              className={styled.tree01}
              {...topDownShowAnimation(0.4)}
              variants={{
                hidden: { 
                  x: 0,
                  y: 40,
                  opacity: 0,
                  rotate: 20
                },
                visible: { y: 0, rotate: 0, opacity: 1 }
              }}
            >
              <Image 
                src={require('assets/home/endsession-tree-1.svg')}
                alt="tree drawing in the background"
                width={917.881}
                height={627.696}
              />
            </m.div>
            <m.div 
              className={styled.tree02}
              {...topDownShowAnimation(0.6)}
              variants={{
                hidden: { 
                  x: 0,
                  y: 40,
                  opacity: 0,
                  rotate: -20
                },
                visible: { y: 0, rotate: 0, opacity: 1 }
              }}
            >
              <Image 
                src={require('assets/home/endsession-tree-2.svg')}
                alt="tree drawing in the background"
                width={168.27}
                height={279.17}
              />
            </m.div>
          </div>
          <m.div 
            className={styled.car}
            {...topDownShowAnimation()}
            variants={{
              hidden: { scale: 0.7, x: 100},
              visible: { scale: 1, x: 0}
            }}
          >  
            <Image 
              src={require('assets/home/endsession-cars.png')}
              alt="Three cars in a row"
              width={648}
              height={227}
            />
          </m.div>
        </div>
        <div className={styled.text}>
          <m.div 
            className={styled.topBox}
            {...topDownShowAnimation(0.6)}
          >
            <strong>
              #
              <span>1</span>
            </strong>
            <p>
              Lorem <span>ipsum dolor</span>
            </p>
          </m.div>
          <m.h2 {...topDownShowAnimation(0.8)}>
            Pellentesque scelerisros venen vestibulum ligeem
          </m.h2>
          <m.p {...topDownShowAnimation(1)}>
            Pellentesque scelerisque nunc entesque scelerisque 
            nunc at eros venen vestibuoin ac sem finibus, auctor 
            quam eu, pretium enean ex sapien, en veor quam eu, 
            pretium enean ex sapien, suscipit nec enicidunt.
          </m.p>
        </div>
      </div>
    </section>
  )
}

export default EndSession;