import React from 'react'
import './style.scss'
import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'
import i18n from '../../i18n'

function MobileMenu({ setIsLeftMobileMenuOpen }) {
  const { t } = i18n
  return (
    <div className="d-lg-none footer-mobile-menu position-fixed bottom-0 w-100">
      <div className="bg-white d-flex justify-content-around px-3 py-2">
        <div className="menu-item">
          <div className="icon">
            <AiOutlineHome size={30} />
          </div>
          <span className="text">{t('mobileTabBar.home')}</span>
        </div>
        <div className="menu-item">
          <div className="icon">
            <AiOutlineShoppingCart size={30} />
          </div>
          <span className="text">{t('mobileTabBar.basket')}</span>
        </div>
        <div className="menu-item">
          <div className="icon">
            <AiOutlineHeart size={30} />
          </div>
          <span className="text">{t('mobileTabBar.favorites')}</span>
        </div>
        <div className="menu-item">
          <div className="icon">
            <IoIosNotificationsOutline size={30} />
          </div>
          <span className="text">{t('mobileTabBar.notifications')}</span>
        </div>
        <div className="menu-item">
          <div
            onClick={() => setIsLeftMobileMenuOpen(true)}
            className="icon"
          >
            <RxHamburgerMenu size={30} />
          </div>
          <span className="text">{t('mobileTabBar.etc')}</span>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
