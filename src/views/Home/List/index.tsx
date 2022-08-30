import React from 'react';
import Image from 'next/image'
import { m } from 'framer-motion'

import styled from './List.module.css'
import useScrollAnimation from 'hooks/useScrollAnimation';

const List: React.FC = () => {
  const { ref, topDownShowAnimation } = useScrollAnimation()
  
  return (
    <section className={styled.list}>
      <div ref={ref} className={`${styled.container} container`}>
        <m.h2 {...topDownShowAnimation()}>
          Pellentesque scelerisque nunc at eros venen vestibulum 
          liged consequat comm
        </m.h2>
        <ul className={styled.items}>
          <m.li {...topDownShowAnimation(0.2)}>
            <Image 
              src={require('assets/icons/check.svg')}
              alt="Check Icon"
            />
            Pellentesque scelerisque nunc at eros venen vestibuoin
          </m.li>
          <m.li {...topDownShowAnimation(0.3)}>
            <Image 
              src={require('assets/icons/check.svg')}
              alt="Check Icon"
            />
            Eros venen vestibulum liged consequat commodo 
          </m.li>
          <m.li {...topDownShowAnimation(0.4)}>
            <Image 
              src={require('assets/icons/check.svg')}
              alt="Check Icon"
            />
            Finibus, auctor quam eu, pretium enean ex sapien
          </m.li>
          <m.li {...topDownShowAnimation(0.5)}>
            <Image 
              src={require('assets/icons/check.svg')}
              alt="Check Icon"
            />
            Suscipit nec enim ut, tincidunt uris ultrices nec
          </m.li>
          <m.li {...topDownShowAnimation(0.6)}>
            <Image 
              src={require('assets/icons/check.svg')}
              alt="Check Icon"
            />
            Rurpis eu accuin purus sit amet tortor rhoncus
          </m.li>
        </ul>
      </div>
    </section>
  )
}

export default List;