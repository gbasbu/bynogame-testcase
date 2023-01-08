import React, { useState } from 'react'
import './style.scss'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { slides } from '../../constant/index'
import SlideItem from '../SlideItem'

function Slides() {
  const getSlideItem = () => {
    return slides.map(item => <SlideItem item={item} />)
  }

  return (
    <div className="carousel-wrapper">
      <h3 className="carousel-title">
        Sizin için <strong>Seçtiklerimiz</strong>
      </h3>
      <Carousel
        infiniteLoop
        showThumbs={false}
      >
        {getSlideItem()}
      </Carousel>
    </div>
  )
}

export default Slides
