import React, { useEffect, useState } from 'react'
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
      </div>
      <div className="container">
        <div className="header-center row d-md-flex align-items-md-center flex-lg-column">
          <div className="header-center-top col-md-6 col-lg-12 d-flex align-items-center justify-content-between justify-content-lg-center">
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
          <div className="header-center-bottom col-md-6 col-lg-12 d-lg-flex mt-lg-3 justify-content-lg-between">
            <div className="col-lg-5 position-relative">
              <Searchbox />
            </div>
            <div className="d-none d-lg-flex col-lg-5 justify-content-between">
              <div
                onMouseEnter={() => onDropdownOpen()}
                onMouseLeave={() => onDropdownClose()}
                onClick={() => onDropdownOpen()}
                className="dropdown d-flex align-items-center"
              >
                <div className="avatar d-flex align-items-center justify-content-center">
                  <FaUserAlt size={25} />
                </div>
                <div className="dropdown-text d-flex flex-column justify-content-center">
                  <strong>Giriş Yap</strong>
                  <small>veya Kayıt Ol</small>
                </div>
                <span>
                  <IoIosArrowDown size={25} />
                </span>
                {dropdownOpen && (
                  <div className="menu position-absolute d-flex flex-column">
                    <span>Sign In</span>
                    <span>Sign Up</span>
                    <span>Activation</span>
                    <span>Forgot Password</span>
                    <hr />
                    <span>Account</span>
                    <span>Orders</span>
                    <span>Selling</span>
                    <span>Deposit Now</span>
                    <span>Coupons</span>
                    <span>My Tickets</span>
                  </div>
                )}
              </div>
              <div className="notifications d-flex justify-content-center align-items-center">
                <IoMdNotifications size={25} />
              </div>
              <div className="favorites d-flex justify-content-center align-items-center">
                <AiFillHeart size={25} />
              </div>
              <div className="basket d-flex justify-content-between align-items-center p-3">
                <BsBasket2Fill size={25} />
                <span>Cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
