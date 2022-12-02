import React, { useCallback } from 'react';
import Image from 'next/image'
import { m, MotionProps } from 'framer-motion'

import styled from './Hero.module.css'
import Background from './Background';
import { getTransition } from 'utils/animation';
import Link from 'next/link';

const Links: React.FC = () => {
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
    <section className={styled.links}>
      <div className={`${styled.container} container`}>
        <Background />
        <div className={styled.text}>
          <nav>
            <Link href="tel:7026377643" className={styled.navItem}>
              <m.div className={styled.icon} {...getAnimationProps(0.4)}>
                <Image 
                  src={require('assets/icons/call.svg')}
                  alt="Call Icon"
                />
              </m.div>
              <m.div className={styled.values} {...getAnimationProps(0.6)}>
                <strong>Call us</strong>
                <p>(702) 637-7643</p>
              </m.div>
            </Link>
            <Link href="mailto:hello@miamicashforcars.com" className={styled.navItem}>
              <m.div className={styled.icon} {...getAnimationProps(0.6)}>
                <Image 
                  src={require('assets/icons/mail.svg')}
                  alt="mail Icon"
                />
              </m.div>
              <m.div className={styled.values} {...getAnimationProps(0.8)}>
                <strong>Email us</strong>
                <p>hello@miamicashforcars.com</p>
              </m.div>
            </Link>
            <Link 
              href="https://goo.gl/maps/6pft7E6MiyyywAtF6" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styled.navItem}
            >
              <m.div className={styled.icon} {...getAnimationProps(0.8)}>
                <Image 
                  src={require('assets/icons/location.svg')}
                  alt="location Icon"
                />
              </m.div>
              <m.div className={styled.values} {...getAnimationProps(1)}>
                <strong>Find us</strong>
                <p>2695 S Decatur Blvd #300, Las Vegas, NV 89102</p>
              </m.div>
            </Link>
          </nav>
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

export default Links;