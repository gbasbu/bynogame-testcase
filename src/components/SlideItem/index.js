import React from 'react'
import './style.scss'

function SlideItem({ item }) {
  const getItemTitle = title => {
    return title.length > 20 ? `${title.slice(0, 20)}...` : title
  }

  const getPrice = (price, discount) => {
    const result = price - (price * discount) / 100
    return result.toFixed(2)
  }

  return (
    <div className="slide-item-wrapper mt-2 mx-4">
      {item.map((item, index) => (
        <div
          key={`${item.title}-${index}-${index + 1}`}
          className="slide-item row mb-2 px-1 py-2 bg-white"
        >
          <div className="slide-item-image col-4 ">
            <img
              src={item.image}
              alt="slide item"
              className="img-fluid"
            />
          </div>
          <div className="slide-item-info-wrapper col-8 p-0">
            <h6 className="slide-item-title d-flex justify-content-start font-weight-bolder">
              {getItemTitle(item.title)}
            </h6>
            <div className="slide-item-price-wrapper mt-4 d-flex justify-content-between align-items-center">
              <div className="slide-item-discount">%{item.discount}</div>
              <div className="slide-item-price px-4 d-flex flex-column justify-content-end">
                <span className="old-price">{item.price} TL</span>
                <span className="new-price">{getPrice(item.price, item.discount)} TL</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SlideItem
