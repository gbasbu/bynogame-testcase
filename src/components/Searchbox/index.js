import React, { useState } from 'react'
import './style.scss'
import { ImSearch } from 'react-icons/im'
import { searches } from '../../constant/index'
import PopularProductItem from '../../components/PopularProductItem/index'
import i18n from '../../i18n'

function Searchbox() {
  const [searchValue, setSearchValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const { t } = i18n

  return (
    <>
      <div className={`${isFocused ? 'searchbox-focused' : ''} searchbox-wrapper`}>
        <div className="search-icon">
          <ImSearch size={20} />
        </div>
        <input
          type="text"
          placeholder={t('searchbox.search')}
          onFocus={() => setIsFocused(true)}
          value={searchValue}
          onChange={event => setSearchValue(event.target.value)}
        />
        {isFocused && (
          <button
            className="search-close"
            onClick={() => {
              setIsFocused(false)
              setSearchValue('')
            }}
          >
            X
          </button>
        )}
        <div className="search-text">{t('searchbox.search')}</div>
      </div>
      {isFocused && (
        <div className="popular-searches-wrapper position-absolute w-100">
          <div className="popular-searches-top">
            <span className="title font-weight-bolder mx-2">{t('searchbox.popularResult')}</span>
            <div className="search-items-wrapper d-flex flex-wrap">
              {searches.map((item, index) => {
                return (
                  <span
                    key={index}
                    className="search-item px-3 py-2 mx-1 my-1 bg-white cursor-pointer"
                  >
                    <span>{item.title}</span>
                  </span>
                )
              })}
            </div>
          </div>
          <div className="popular-searches-center mx-0 p-3 row bg-white">
            <p className="font-italic">{t('searchbox.popularProducts')}</p>
            <PopularProductItem />
          </div>
        </div>
      )}
    </>
  )
}

export default Searchbox
