/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import './style.scss'
import Count from '../ProductCount/index'
import i18n from 'i18next'

function Card({ title, description, price, discount, image }) {
  const [value, setValue] = useState(1)

  const getPrice = () => {
    const result = price - (price * discount) / 100
    return result.toFixed(2)
  }
  return (
    <div className="container mb-2">
      <div className="row">
        <div className="col-12">
          <div className="card-wrapper">
            <div className="row">
              <div className="col-5">
                <img
                  src={image}
                  alt={`card-image-${title}`}
                  className="img-fluid"
                />
              </div>
              <div className="col-7">
                <h2 className="title">{title}</h2>
                <p className="description font-weight-bold mb-0 text-left">{description}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-2 discount-wrapper">
                <span className="discount-text">%{discount}</span>
                <span>{i18n.t('main.discount')}</span>
              </div>
              <div className="col-9">
                <div className="discount-price">{price} TL</div>
                <div className="price">
                  {getPrice()} <span>TL</span>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <Count
                  value={value}
                  setValue={setValue}
                />
              </div>
              <div className="col-12">
                <button className="btn btn-block btn-lg buy-now font-weight-bolder p-2 px-2 py-2 w-100">
                  {i18n.t('main.buyNow')}
                </button>
              </div>
              <div className="col-12">
                <button className="btn btn-block btn-lg add-to-cart font-weight-bolder p-2 px-2 py-2 w-100 mt-2">
                  {i18n.t('main.addToCart')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
