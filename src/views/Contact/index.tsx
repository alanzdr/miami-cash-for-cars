import React from 'react';

import Motion from 'contexts/MotionContent';

import Hero from './Hero'
import Links from './Links'

const Home: React.FC = () => {
  return (
    <Motion>
      <Hero />
      <Links />
    </Motion>
  )
}

export default Home;