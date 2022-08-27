import React from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion'

import Button from 'components/Button';
import styled from './Hero.module.css'
import Background from './Background';
import { getTransition } from 'utils/animation';

const Hero: React.FC = () => {
  return (
    <section className={styled.hero}>
      <div className={`${styled.container} container`}>
        <Background />
        <div className={styled.text}>
          <motion.div className={styled.topBox}
            
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0, x: 40 },
              animate: { opacity: 1, x: 0 }
            }}
            transition={getTransition()}
          >
            <strong>
              #
              <span>1</span>
            </strong>
            <p>
              Lorem <span>ipsum dolor</span> sit amet!
            </p>
          </motion.div>
          <motion.h1
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0, x: 40 },
              animate: { opacity: 1, x: 0 }
            }}
            transition={getTransition({delay: 0.2})}
          >
            Sed dignissim sum non fermentu miam 
          </motion.h1>
          <motion.p
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0, x: 40 },
              animate: { opacity: 1, x: 0 }
            }}
            transition={getTransition({delay: 0.4})}
          >
            Pellentesque scelerisque nunc at eros venen 
            vestibulum liged consequat commodo oroin ac 
            sem finibus, auctor quam eu, pretium enean 
            ex sapien, suscipit nec enim ut, tincidunt.
          </motion.p>
          <motion.div 
            className={styled.button}
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0, x: 40 },
              animate: { opacity: 1, x: 0 }
            }}
            transition={getTransition({delay: 0.6})}
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
          </motion.div>
        </div>
        <motion.div 
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
        </motion.div>
      </div>
    </section>
  )
}

export default Hero;