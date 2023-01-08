import React, { useState } from 'react'
import './style.scss'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import i18n from '../../i18n'

function Nav() {
  const { t } = i18n
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="container navbar-wrapper mt-3">
      <div className="row">
        <div className="d-flex align-items-center justify-content-start">
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <span>{t('main.home')}</span>
              </li>
              <li className="breadcrumb-item">
                <span>{t('main.games')}</span>
              </li>
              <li className="breadcrumb-item">
                <span>{t('main.riotGames')}</span>
              </li>
              <li className="breadcrumb-item active">
                <span>{t('main.valorantPoints')}</span>
              </li>
            </ol>
          </nav>
        </div>
        <div className="d-flex align-items-center justify-content-end">
          {!isFavorite ? (
            <AiOutlineHeart
              className="heart-icon-empty"
              size={30}
              onClick={() => setIsFavorite(!isFavorite)}
            />
          ) : (
            <AiFillHeart
              className="heart-icon-selected"
              size={30}
              onClick={() => setIsFavorite(!isFavorite)}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Nav
