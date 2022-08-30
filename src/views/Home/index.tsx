import React from 'react';

import Motion from 'contexts/MotionContent';

import Hero from './Hero'
import HowWorks from './HowWorks'
import WatchVideo from './WatchVideo'
import BlueCta from './BlueCta'
import Vehicle from './Vehicle'
import List from './List'
import Points from './Points'

const Home: React.FC = () => {
  return (
    <Motion>
      <Hero />
      <HowWorks />
      <WatchVideo />
      <BlueCta />
      <Vehicle />
      <List />
      <Points />
    </Motion>
  )
}

export default Home;