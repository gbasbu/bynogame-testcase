import React, { useState, useEffect } from 'react'
import './style.scss'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import { slides } from '../../constant/index'
import SlideItem from '../SlideItem'
import i18n from '../../i18n'

function Slides() {
  const { t } = i18n
  const [items, setItems] = useState(1)
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height
    }
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (windowDimensions.width >= 1200) return setItems(4)
    if (windowDimensions.width >= 992) return setItems(3)
    if (windowDimensions.width >= 768) setItems(2)
    else setItems(1)
  }, [windowDimensions])

  const getSlideItem = () => {
    return slides.map((item, index) => (
      <div key={index}>
        <SlideItem item={item} />
      </div>
    ))
  }

  return (
    <div className="carousel-wrapper">
      <h3
        className="carousel-title"
        dangerouslySetInnerHTML={{ __html: t('main.carouselTitle') }}
      ></h3>
      <OwlCarousel
        className="owl-theme"
        loop
        responsiveClass
        items={items}
      >
        {getSlideItem()}
      </OwlCarousel>
    </div>
  )
}

export default Slides
