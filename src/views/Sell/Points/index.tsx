import React from 'react';
import Image from 'next/image';
import { m } from 'framer-motion'

import styled from './Points.module.css'
import useScrollAnimation from 'hooks/useScrollAnimation';

const Points: React.FC = () => {
  const { 
    topDownShowAnimation, 
    ref, 
  } = useScrollAnimation()
  
  return (
    <section ref={ref} className={`${styled.points} container`}>
      <m.div {...topDownShowAnimation()} className={styled.item}>
        <div className={styled.icon}>
          <Image src={require("assets/sell/sell-car.svg")} alt="Sell car icon" />
        </div>
        <h2>
          Rsqunc at eros venen vesti
        </h2>
        <p>
          Pellentesque scelerisque nunc allentesque 
          scelerisqunc at eros venen vestibuoin ac 
          sem finibu
        </p>
      </m.div>
      <m.div {...topDownShowAnimation(0.2)} className={styled.item}>
        <div className={styled.icon}>
          <Image src={require("assets/sell/sell-diagram.svg")} alt="chart icon" />
        </div>
        <h2>
          Rsqunc at eros venen vesti
        </h2>
        <p>
          Pellentesque scelerisque nunc allentesque 
          scelerisqunc at eros venen vestibuoin ac 
          sem finibu
        </p>
      </m.div>
      <m.div {...topDownShowAnimation(0.4)} className={styled.item}>
        <div className={styled.icon}>
          <Image src={require("assets/sell/sell-wallet.svg")} alt="wallet icon" />
        </div>
        <h2>
          Rsqunc at eros venen vesti
        </h2>
        <p>
          Pellentesque scelerisque nunc allentesque 
          scelerisqunc at eros venen vestibuoin ac 
          sem finibu
        </p>
      </m.div>
    </section>
  )
}

export default Points;