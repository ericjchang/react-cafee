import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Lorem ipsum dolor sit amet</HeroH1>
        <HeroP>
          consectetur adipiscing elit. Aenean ornare justo mauris, in accumsan lectus iaculis vel.
        </HeroP>
        <HeroBtnWrapper>
          <Button to="signup"
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'>
            Find out More
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
