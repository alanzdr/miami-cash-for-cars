import React from 'react';

import Motion from 'contexts/MotionContent';

import Hero from './Hero'
import HowWorks from './HowWorks'
import WatchVideo from './WatchVideo'
import BlueCta from './BlueCta'

const Home: React.FC = () => {
  return (
    <Motion>
      <Hero />
      <HowWorks />
      <WatchVideo />
      <BlueCta />
    </Motion>
  )
}

export default Home;