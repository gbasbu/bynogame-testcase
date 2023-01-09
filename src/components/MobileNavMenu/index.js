import React from 'react'
import './style.scss'
import { mobileMenuItems } from '../../constant/index'
import i18n from '../../i18n'

function MobileNavMenu({ isMobileNavOpen, setIsMobileNavOpen, skin }) {
  //

  // https://cdn.bynogame.com/UX-new/logo-01.svg
  const { t } = i18n
  return (
    <div className={`mobile-nav-wrapper p-3 ${isMobileNavOpen ? 'open' : 'close'}`}>
      <div className="col-12 d-flex justify-content-end mt-3">
        <button
          className="close-btn"
          onClick={() => setIsMobileNavOpen(false)}
        >
          X
        </button>
      </div>
      <div className="col-12 mt-3 mb-5 d-flex justify-content-center">
        <img
          alt=""
          className="img-fluid mt-3 w-25"
          src={
            skin === 'dark'
              ? 'https://cdn.bynogame.com/UX-new/logo-02.svg'
              : 'https://cdn.bynogame.com/UX-new/logo-01.svg'
          }
        ></img>
      </div>
      <div className="col-12 mb-3 d-flex justify-content-center user-button-group">
        <button className="mx-2">{t('mobileRightMenu.login')}</button>
        <button className="mx-2">{t('mobileRightMenu.register')}</button>
      </div>
      {mobileMenuItems.map((item, index) => (
        <div className="col-12 d-flex align-items-center nav-item pt-4">
          {item.icon}
          <span className="px-2">{t(`mobileRightMenu.${item.title}`)}</span>
        </div>
      ))}
    </div>
  )
}

export default MobileNavMenu
