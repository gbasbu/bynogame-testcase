import React from 'react'
import './style.scss'
import { popularProducts } from '../../constant/index'
import i18n from '../../i18n'

function PopularProductItem() {
  const { t } = i18n
  return (
    <div className="popular-procut-item-wrapper">
      {popularProducts.map((item, index) => (
        <div className="row mb-3">
          <div className="col-3">
            <img
              width={70}
              height={70}
              src={item.image}
              alt="product item"
            />
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-12">
                <p className="mb-0">{item.title}</p>
              </div>
              <div className="col-12 d-flex align-items-center justify-content-between mt-1">
                <strong className="mb-0">{item.price} TL</strong>
                <button>{item.discount_price ? t('searchbox.takeALook') : t('searchbox.addToCart')}</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PopularProductItem
