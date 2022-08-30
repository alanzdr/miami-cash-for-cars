import React from 'react';
import Image from 'next/image';
import { m } from 'framer-motion'

import styled from './WatchVideo.module.css'
import useScrollAnimation from 'hooks/useScrollAnimation';

const WatchVideo: React.FC = () => {
  const { 
    topDownShowAnimation, 
    ref, 
    alreadyView
  } = useScrollAnimation()

  return (
      <section ref={ref} className={styled.watchvideo}>
        <div className={`${styled.container} container`}>
          <div className={styled.text}>
            <m.strong {...topDownShowAnimation()}>
              <Image 
                src={require("assets/icons/play.svg")}
                alt="Play Icon"
                width={16}
                height={16}
              />
              <p><span>Watch</span> our video</p>
            </m.strong>
            <m.h2 {...topDownShowAnimation(0.2)}>
              Sed dignissim sum non fermentu miam
            </m.h2>
            <m.p {...topDownShowAnimation(0.4)}>
              Pellentesque scelerisque nunc at eros venen vestibuoin 
              ac sem finibus, auctor quam eu, pretium enean ex sapien,
              suscipit llentesque scelerisque nunc at eros venen 
              vestibuoin ac sem finibus, auctor quam eu, pretium 
              enean ex sapien, suscipit nec enicidunt.c enicidunt.
            </m.p>
          </div>
          <m.div {...topDownShowAnimation(0.6)} className={styled.video}>
            <div className={styled.videoContainer}>
              <div className={styled.spinner} />
              {alreadyView && (
                <iframe 
                  src="https://www.youtube.com/embed/X2mOfqeAH7c?rel=0&start=130" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              )}
            </div>
          </m.div>
        </div>
      </section>
    )
}

export default WatchVideo;