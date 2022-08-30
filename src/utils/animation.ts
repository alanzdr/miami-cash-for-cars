import type { Transition } from 'framer-motion'

const DEFAULT_TRANSITION: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 40
}

export const getTransition = (extraConfigs: Partial<Transition> = {}) => ({
  ...DEFAULT_TRANSITION,
  ...extraConfigs
})
