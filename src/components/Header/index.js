import React, { useState } from 'react'
import './style.scss'
import { globals } from '../../constant/index'
import { FaTiktok, FaTelegram, FaInstagram, FaUserAlt } from 'react-icons/fa'
import { BsMoonStars, BsBasket2Fill } from 'react-icons/bs'
import { TfiWorld } from 'react-icons/tfi'
import { IoMdNotifications, IoIosArrowDown } from 'react-icons/io'
import { AiFillHeart } from 'react-icons/ai'
import Searchbox from '../Searchbox/index'
import { useTranslation } from 'react-i18next'

function Header({ setIsMobileNavOpen, setLang, skin, setSkin }) {
  const { i18n } = useTranslation()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [favoritesOpen, setFavoritesOpen] = useState(false)

  const changeLanguage = event => {
    if (i18n.language === 'tr') {
      localStorage.setItem('language', 'en')
      i18n.changeLanguage('en')
      setLang('en')
      return
    }
    localStorage.setItem('language', 'tr')
    i18n.changeLanguage('tr')
    setLang('tr')
  }

  const changeTheme = () => {
    document.body.classList.toggle('dark-mode')
    skin === 'light' ? setSkin('dark') : setSkin('light')
  }

  const onDropdownOpen = () => {
    setDropdownOpen(true)
  }

  const onDropdownClose = () => {
    setDropdownOpen(false)
  }

  return (
    <div className="header-wrapper">
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-2 p-0">
              <a
                href={globals.instagram}
                target="_blank"
                className="brand-icons"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href={globals.tiktok}
                target="_blank"
                className="brand-icons"
                rel="noreferrer"
              >
                <FaTiktok />
              </a>
              <a
                href={globals.telegram}
                target="_blank"
                className="brand-icons"
                rel="noreferrer"
              >
                <FaTelegram />
              </a>
            </div>
            <div className="d-none d-lg-flex col-lg-10 px-1">
              <ul>
                <li>{i18n.t('header.stores')}</li>
                <li>{i18n.t('header.param')}</li>
                <li>{i18n.t('header.promotions')}</li>
                <li>{i18n.t('header.news')}</li>
                <li>{i18n.t('header.corporate')}</li>
                <li>{i18n.t('header.comments')}</li>
                <li className="help">{i18n.t('header.helpDest')}</li>
                <li className="seller">{i18n.t('header.listAnItem')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="header-center pb-lg-0 row d-md-flex align-items-md-center align-items-xl-center flex-xl-row flex-lg-column">
          <div className="header-center-top col-md-6 col-lg-12 col-xl-3 d-flex align-items-center justify-content-between justify-content-lg-center justify-content-xl-start">
            <a
              href={globals.home}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={`${
                  skin === 'dark'
                    ? 'https://cdn.bynogame.com/destek/logo2-1668681751618.png'
                    : 'https://cdn.bynogame.com/destek/logo1-1668681721683.png'
                }`}
                alt="ByNoGame"
                className="img-fluid logo"
              />
            </a>
            <div className="menus d-flex align-items-center">
              <button onClick={() => changeTheme()}>
                <BsMoonStars />
              </button>
              <button
                onClick={event => changeLanguage(event)}
                className="language-menu"
              >
                <TfiWorld size={30} />
                <span className="language-text text-uppercase">{i18n.language}</span>
              </button>
              <button
                onClick={() => setIsMobileNavOpen(true)}
                className="user-menu d-lg-none"
              >
                <div className="user-icon-wrapper d-flex  align-items-center justify-content-center">
                  <FaUserAlt size={25} />
                </div>
              </button>
            </div>
          </div>
          <div className="header-center-bottom col-md-6 col-lg-12 col-xl-9 d-lg-flex mt-xl-0 mt-lg-3 justify-content-lg-between">
            <div className="searchbox-wrapper-lg col-lg-5 col-xl-6 position-relative">
              <Searchbox />
            </div>
            <div className="d-none d-lg-flex col-lg-5 col-xl-6 justify-content-between desktop-user-menu align-items-end">
              <div
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setTimeout(() => setDropdownOpen(false), 1000)}
                onClick={() => setDropdownOpen(true)}
                className="dropdown d-flex align-items-center"
              >
                <div className="avatar d-flex align-items-center justify-content-center">
                  <FaUserAlt size={25} />
                </div>
                <div className="dropdown-text d-flex flex-column justify-content-center">
                  <strong>{i18n.t('mobileUserDropdown.login')}</strong>
                  <small>{i18n.t('mobileUserDropdown.signInOrSignup')}</small>
                </div>
                <span>
                  <IoIosArrowDown size={25} />
                </span>
                {dropdownOpen && (
                  <div className="menu position-absolute d-flex flex-column">
                    <span>{i18n.t('mobileUserDropdown.login')}</span>
                    <span>{i18n.t('mobileUserDropdown.register')}</span>
                    <span>{i18n.t('mobileUserDropdown.activation')}</span>
                    <span>{i18n.t('mobileUserDropdown.forgotPassword')}</span>
                    <hr />
                    <span>{i18n.t('mobileUserDropdown.account')}</span>
                    <span>{i18n.t('mobileUserDropdown.orders')}</span>
                    <span>{i18n.t('mobileUserDropdown.sales')}</span>
                    <span>{i18n.t('mobileUserDropdown.pay')}</span>
                    <span>{i18n.t('mobileUserDropdown.cupons')}</span>
                    <span>{i18n.t('mobileUserDropdown.tickets')}</span>
                  </div>
                )}
              </div>
              <div
                onMouseEnter={() => setNotificationsOpen(true)}
                onMouseLeave={() => onDropdownClose(setNotificationsOpen(false))}
                onClick={() => onDropdownOpen(setNotificationsOpen(true))}
                className="notifications position-relative d-flex justify-content-center align-items-center"
              >
                <IoMdNotifications size={25} />
                {notificationsOpen && <div className="dropdown position-absolute bg-white">No Notifications Yet</div>}
              </div>
              <div
                onMouseEnter={() => setFavoritesOpen(true)}
                onMouseLeave={() => setFavoritesOpen(false)}
                onClick={() => setFavoritesOpen(true)}
                className="favorites position-relative d-flex justify-content-center align-items-center"
              >
                <AiFillHeart size={25} />
                {favoritesOpen && <div className="dropdown position-absolute bg-white">No Favorites Yet</div>}
              </div>
              <div className="basket d-flex justify-content-between align-items-center p-3">
                <BsBasket2Fill size={25} />
                <span>Cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-center-lg-item mt-3 d-none d-lg-flex col-lg-12">
        <div className="container">
          <ul className="menu-navbar-ul">
            <li className="menu-navbar-li">GAMES</li>
            <li className="menu-navbar-li">KNIGHT ONLINE</li>
            <li className="menu-navbar-li">SKIN</li>
            <li className="menu-navbar-li">VALORANT VP</li>
            <li className="menu-navbar-li">BUY-SELL RAZER</li>
            <li className="menu-navbar-li">PUBG UC</li>
            <li className="menu-navbar-li">STEAM</li>
            <li className="menu-navbar-li">MARKETPLACE</li>
            <li className="menu-navbar-li">DONATE</li>
            <li className="menu-navbar-li">PAYMENT</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
