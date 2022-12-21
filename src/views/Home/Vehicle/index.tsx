import React from 'react';
import Image from 'next/image';
import { m } from 'framer-motion'

import Button from 'components/Button';
import styled from './Vehicle.module.css'
import useScrollAnimation from 'hooks/useScrollAnimation';

const Vehicle: React.FC = () => {
  const { ref, topDownShowAnimation } = useScrollAnimation()
  
  return (
    <section ref={ref} className={styled.vehicle}>
      <div className={`${styled.container} container`}>
        <div className={styled.text}>
          <m.h2 {...topDownShowAnimation()}>
            Sed dignissim sum non fermentu miam
          </m.h2>
          <m.p 
            {...topDownShowAnimation(0.2)} 
            className={styled.mainText}
          >
            Pellentesque scelerisque nunc entesque scelerisque 
            nunc at eros venen vestibuoin ac sem finibus, auctor 
            quam eu, pretium enean ex sapien, suscipit nec enicidunt.
            enen vestibuoin ac sem finibus, auctor quam eu, pretium 
            enean ex sapien, suscipit nec enicidunt.
          </m.p>
          <m.p 
            className={styled.botText}
            {...topDownShowAnimation(0.4)}
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
          <m.div 
            className={styled.button}
            {...topDownShowAnimation(0.6)}
          >
            <Button
              component='a'
              href="#contact"
            >
              <Image 
                src={require('assets/icons/quote.svg')}
                alt="Quote icon"
              />
              <p>get an instant quote</p>
            </Button>
          </m.div>
        </div>
        <div className={styled.image}>
          <div className={styled.background}>
            <m.div 
              className={styled.sun}
              {...topDownShowAnimation(0.6)}
            >
              <Image 
                src={require('assets/home/vehicle-sun.svg')}
                alt="sun drawing in the background"
                width={743.182} 
                height={544.226}
              />
            </m.div>
            <m.div 
              className={styled.lines}
              {...topDownShowAnimation(0.6)}
              variants={{
                hidden: { opacity: 0, y: '-50%', x: 80},
                visible: { opacity: 1, y: '-50%', x: 0}
              }}
            >
              <Image 
                src={require('assets/home/vehicle-lines.svg')}
                alt="sun drawing in the background"
                height={744.65} 
                width={642.49}
              />
            </m.div>
          </div>
          <m.div 
            className={styled.car}
            {...topDownShowAnimation(0)}
            variants={{
              hidden: { scale: 0.7, x: 100},
              visible: { scale: 1, x: 0}
            }}
          >
            <Image 
              src={require('assets/home/vehicle-car.png')}
              alt="A black 2018 Chevrolet Colorado WT"
              width={597}
              height={329}
            />
          </m.div>
        </div>
      </div>
    </section>
  );
}

export default Vehicle;