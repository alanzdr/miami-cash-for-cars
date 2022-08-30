import { useCallback, useEffect, useState } from 'react';
import { MotionProps, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { getTransition } from 'utils/animation';

const useScrollAnimation = (initalThreshold = 0.35, delay = 200) => {
  const controls = useAnimation();
  const [threshold, setThreshold] = useState(initalThreshold);
  const [alreadyView, setAlreadyView] = useState(false);
  const [ref, inView] = useInView({
    delay,
    threshold,
  });

  useEffect(() => {
    if (inView && !alreadyView) {
      controls.start('visible');
      setAlreadyView(true);
    }
  }, [alreadyView, controls, inView]);

  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setThreshold(0);
    }
  }, [initalThreshold]);

  const topDownShowAnimation = useCallback(
    (delay = 0): MotionProps => {
      return {
        initial: "hidden",
        animate: controls,
        variants: {
          hidden: { opacity: 0, y: 80},
          visible: { opacity: 1, y: 0}
        },
        transition: getTransition({delay})
      }
    },
    [controls],
  )

  return {
    ref,
    controls,
    alreadyView,
    topDownShowAnimation
  };
};

export default useScrollAnimation;
