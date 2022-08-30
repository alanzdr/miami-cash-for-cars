import React from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'

interface Props {
  children: React.ReactNode
}
const MotionContent: React.FC<Props> = ({children}) => {
  return (
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  )
}

export default MotionContent;