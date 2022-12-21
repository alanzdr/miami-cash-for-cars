import React from 'react';

import Motion from 'contexts/MotionContent';

import Hero from './Hero'

const Home: React.FC = () => {
  return (
    <Motion>
      <Hero />
    </Motion>
  )
}

export default Home;