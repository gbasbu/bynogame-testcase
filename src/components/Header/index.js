import React from 'react'
import './style.scss'
import { globals } from '../../constant/index'
import { FaTiktok, FaTelegram, FaInstagram, FaUserAlt } from 'react-icons/fa'
import { BsMoonStars } from 'react-icons/bs'
import { TfiWorld } from 'react-icons/tfi'
import Searchbox from '../Searchbox/index'
import { useTranslation } from 'react-i18next'

function Header({ setIsMobileNavOpen, setLang, skin, setSkin }) {
  const { i18n } = useTranslation()
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

  return (
    <div className="header-wrapper">
      <div className="header-top">
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
      <div className="header-center">
        <div className="header-center-top d-flex align-items-center justify-content-between">
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
              className="user-menu"
            >
              <div className="user-icon-wrapper d-flex align-items-center justify-content-center">
                <FaUserAlt size={25} />
              </div>
            </button>
          </div>
        </div>
        <div className="header-center-bottom position-relative">
          <Searchbox />
        </div>
      </div>
    </div>
  )
}

export default Header
