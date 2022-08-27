import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'

import styled from './HeroBackground.module.css'
import { getTransition } from 'utils/animation';

const Background: React.FC = () => {
  return (
    <>
      <div className={styled.background}>
        <div className={styled.content}>
          <div className={styled.ground}>
            <div className={styled.groundFill}>
              <Image 
                src={require('assets/home/hero-ground.svg')}
                alt="floor made of lines"
                quality={100}
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
              quality={100}
              width={1171.8}
              height={316.17}
            />
          </div>
          <motion.div 
            className={styled.sun}
            initial="initial"
            animate="animate"
            variants={{
              initial: { 
                x: '41%',
                y: '-46.4%'
              },
              animate: { y: '-76.4%' }
            }}
            transition={getTransition({
              delay: 0.2
            })}
          >
            <Image 
              src={require('assets/home/hero-sun.svg')}
              alt="sun drawing in the background"
              quality={100}
              width={917.881}
              height={627.696}
            />
          </motion.div>
          <motion.div 
            className={styled.tree01}
            initial="initial"
            animate="animate"
            variants={{
              initial: { 
                x: 0,
                y: '-50%',
                opacity: 0,
                rotate: 20
              },
              animate: { y: '-100%', rotate: 0, opacity: 1 }
            }}
            transition={getTransition({
              delay: 0.4,
              stiffness: 120
            })}
          >
            <Image 
              src={require('assets/home/home-tree-1.svg')}
              alt="tree drawing in the background"
              quality={100}
              width={917.881}
              height={627.696}
            />
          </motion.div>
          <motion.div 
            className={styled.tree02}
            initial="initial"
            animate="animate"
            variants={{
              initial: { 
                x: 0,
                y: '-50%',
                opacity: 0,
                rotate: -20
              },
              animate: { y: '-100%', rotate: 0, opacity: 1 }
            }}
            transition={getTransition({
              delay: 0.6,
              stiffness: 120
            })}
          >
            <Image 
              src={require('assets/home/home-tree-2.svg')}
              alt="tree drawing in the background"
              quality={100}
              width={168.27}
              height={279.17}
            />
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Background;