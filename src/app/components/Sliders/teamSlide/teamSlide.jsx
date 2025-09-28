"use client"
import React, { useCallback } from 'react'
import './embla.css'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from '../components/EmblaCarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Card from '../components/card'

const TeamSlide = (props) => {
  const { data, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <section className="embla relative">
        <PrevButton className='prevButton' onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {data.map((item) => (
            <div className="embla__slide" key={item.id}>
            <div className="embla__slide__number">
                <Card item={item}/>
            </div>
            </div>
          ))}
        </div>
      </div>
    <NextButton className='nextButton' onClick={onNextButtonClick} disabled={nextBtnDisabled} />

    </section>
  )
}

export default TeamSlide
