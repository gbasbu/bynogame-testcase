import React from 'react'
import './style.scss'
import { mobileLeftMenuItems } from '../../constant/index'
import { MdArrowForwardIos } from 'react-icons/md'
import i18n from '../../i18n'

function MobileLeftMenu({ isLeftMobileMenuOpen, setIsLeftMobileMenuOpen }) {
  const { t } = i18n
  return (
    <div className={`mobile-left-menu-wrapper ${isLeftMobileMenuOpen ? 'open-left' : 'close-left'}`}>
      <div className="d-flex align-self-center justify-content-end mt-3 mb-3 px-3">
        <button
          onClick={() => setIsLeftMobileMenuOpen(false)}
          className="btn btn-lg close-btn mb-3 px-4"
        >
          X
        </button>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 px-3">
            {mobileLeftMenuItems.map((item, index) => (
              <div
                key={index}
                className="col-12 mt-1 menu-item d-flex justify-content-between align-items-center"
              >
                <span>{t(`mobileLeftMenu.${item.title}`)}</span>
                <MdArrowForwardIos />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileLeftMenu
