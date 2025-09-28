"use client"

import React, { useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import './emblaHero.css'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from '../components/EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from '../components/EmblaCarouselDotButton'
import HeroContent from '../components/heroContent'

const HeroSlider = (props) => {
  const { slidesData, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()])
  const videoRefs = useRef([]) 

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      slidesData.forEach((slide, index) => {
        const videoEl = videoRefs.current[index]
        if (!videoEl) return
        if (index === emblaApi.selectedScrollSnap()) videoEl.play()
        else videoEl.pause()
      })
    }

    emblaApi.on('select', onSelect)
    onSelect() 
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi, slidesData])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="emblaHero ">
      <div className="emblaHero__viewport" ref={emblaRef}>
        <div className="emblaHero__container">
          {slidesData.map((data,index) => (
            <div className="emblaHero__slide" key={data.id}>
                <HeroContent data={data} videoRef={(el) => (videoRefs.current[index] = el)}/>
              
            </div>
          ))}

        </div>
                <div className="emblaHero__controls">
        <div className="emblaHero__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        </div>

        <div className="emblaHero__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'emblaHero__dot'.concat(
                index === selectedIndex ? ' emblaHero__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
      </div>


    </div>
  )
}

export default HeroSlider
