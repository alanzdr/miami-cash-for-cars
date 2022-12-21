import React from 'react';
import Hero from './Hero'
import Vehicle from './Vehicle'
import ContactBox from 'components/ContactBox'
import BlueCta from './BlueCta'
import Points from './Points'
import WatchVideo from './WatchVideo'
import Motion from 'contexts/MotionContent';

const Sell: React.FC = () => {
  return (
    <Motion>
      <Hero />
      <ContactBox name="contact-top" />
      <Vehicle />
      <BlueCta />
      <Points />
      <WatchVideo />
      <ContactBox name="contact" />
    </Motion>
  )
}

export default Sell;