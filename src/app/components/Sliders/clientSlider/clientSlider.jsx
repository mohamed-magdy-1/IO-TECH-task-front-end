"use client"
import React, { useCallback } from 'react'
import './emblaClient.css'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from '../components/EmblaCarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import ClintCard from '../components/ClintCard'

const ClientSlider = (props) => {
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
    <section className="emblaClint">
      <div className="emblaClint__viewport" ref={emblaRef}>
        <div className="emblaClint__container">
          {data.map((item) => (
            <div className="emblaClint__slide" key={item.id}>
              <div className="emblaClint__slide__number">
                <ClintCard data={item}/>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="emblaClint__controls">
        <div className="emblaClint__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

export default ClientSlider
