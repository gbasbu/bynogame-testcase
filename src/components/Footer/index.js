/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './style.scss'
import i18n from '../../i18n'
import { FaTelegramPlane, FaFacebookF, FaTwitch, FaYoutube, FaTwitter, FaLinkedinIn, FaTiktok } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { globals } from '../../constant/index'

function Footer() {
  const { t } = i18n
  return (
    <>
      {i18n.language === 'tr' && (
        <div className="footer-top-wrapper mt-5">
          <div className="row pt-3 m-0 d-md-flex text-md-center">
            <div className="col-12 col-sm-6 col-md-3">
              <p className="h5 mb-2 text-bold text-uppercase">BYNOGAME </p>
              <ul className="list-unstyled p-0 widget-list">
                <li>
                  <a
                    className="text-decoration-none"
                    href="#"
                  >
                    {t('footer.aboutUs')}
                  </a>{' '}
                </li>
                <li>
                  <a
                    className="text-decoration-none"
                    href="#"
                  >
                    {t('footer.activities')}
                  </a>{' '}
                </li>
                <li>
                  <a
                    className="text-decoration-none"
                    href="#"
                  >
                    {t('footer.career')}
                  </a>{' '}
                </li>
                <li>
                  <a
                    className="text-decoration-none"
                    href="#"
                  >
                    {t('footer.sponsors')}
                  </a>{' '}
                </li>
                <li>
                  <a
                    className="text-decoration-none"
                    href="#"
                  >
                    {t('footer.logos')}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="d-block widget">
                <p className="h5 mb-2 text-bold text-uppercase">{t('footer.shopping')} </p>
                <ul className="list-unstyled p-0 widget-list">
                  <li>
                    <a
                      className="text-decoration-none"
                      href="#"
                    >
                      {t('footer.payOptions')}
                    </a>{' '}
                  </li>
                  <li>
                    <a
                      className="text-decoration-none"
                      href="#"
                    >
                      {t('footer.support')}
                    </a>{' '}
                  </li>
                  <li>
                    <a
                      className="text-decoration-none"
                      href="https://www.hollyhood.com.tr"
                    >
                      Hollyhood
                    </a>
                  </li>
                </ul>
              </div>{' '}
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="d-block widget">
                <p className="h5 mb-2 text-bold text-uppercase">{t('footer.membership')} </p>
                <ul className="list-unstyled p-0 widget-list">
                  <li>
                    <a
                      className="text-decoration-none"
                      href="#"
                    >
                      {t('footer.forgotUsernamePassword')}
                    </a>{' '}
                  </li>
                  <li>
                    <a
                      className="text-decoration-none"
                      href="#"
                    >
                      {t('footer.information')}
                    </a>{' '}
                  </li>
                  <li>
                    <a
                      className="text-decoration-none"
                      href="#"
                    >
                      {t('footer.supportRequests')}
                    </a>{' '}
                  </li>
                  <li>
                    <a
                      className="text-decoration-none"
                      href="#"
                    >
                      {t('footer.orders')}
                    </a>{' '}
                  </li>
                  <li>
                    <a
                      className="text-decoration-none"
                      href="#"
                    >
                      {t('footer.accountDelete')}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="d-block widget">
                <p className="h5 mb-2 text-bold text-uppercase">{t('footer.help')}</p>
                <ul className="list-unstyled p-0 widget-list">
                  <li>
                    <a
                      className="text-decoration-none"
                      href="#"
                    >
                      {t('footer.helpCenter')}
                    </a>{' '}
                  </li>
                  <li>
                    <a
                      className="text-decoration-none"
                      href="#"
                    >
                      {t('footer.contact')}
                    </a>
                  </li>
                </ul>
              </div>{' '}
            </div>
          </div>
        </div>
      )}
      <div className="row m-0 d-none d-md-flex justify-content-center footer-center">
        <div className="col-md-8 col-xl-6 d-flex justify-content-around">
          <a
            target="_blank"
            href={globals.telegram}
            className="footer-icons"
            rel="noreferrer"
          >
            <FaTelegramPlane />
          </a>
          <a
            target="_blank"
            href={globals.instagram}
            className="footer-icons"
            rel="noreferrer"
          >
            <AiOutlineInstagram />
          </a>
          <a
            target="_blank"
            href={globals.facebook}
            className="footer-icons"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            target="_blank"
            href={globals.twitch}
            className="footer-icons"
            rel="noreferrer"
          >
            <FaTwitch />
          </a>
          <a
            target="_blank"
            href={globals.youtube}
            className="footer-icons"
            rel="noreferrer"
          >
            <FaYoutube />
          </a>
          <a
            target="_blank"
            href={globals.twitter}
            className="footer-icons"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            target="_blank"
            href={globals.linkedin}
            className="footer-icons"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            target="_blank"
            href={globals.tiktok}
            className="footer-icons"
            rel="noreferrer"
          >
            <FaTiktok />
          </a>
          <img
            src="https://cdn.bynogame.com/images/1641890814297.png"
            alt=""
          />
        </div>
      </div>
      <div className="footer-bot-wrapper mb-md-0">
        <div className="row m-0 d-lg-flex">
          <div className="col-12 col-lg-2">
            <div className="d-flex justify-content-center mb-3">
              <img
                alt="ByNoGame"
                src="https://www.bynogame.com/cdn-cgi/mirage/ab491827e5740eb143614438331e57e0cb476d1a5d3cfae59482f3178db8ccaf/1280/https://cdn.bynogame.com/UX-new/bynogame-footer-logo/png/bynogame-footer-logo.png"
              />
            </div>
          </div>
          <div className="col-12 col-lg-10 d-lg-flex justify-content-between">
            <div className="contacts mb-2 text-center">
              <p className="mb-0">ByNoGame Bilişim LTD.</p>
              <p className="mb-0">{t('footer.info')} info@bynogame.com</p>
              <p className="mb-0">
                <span>{t('footer.help')}: </span>destek2@bynogame.com
              </p>
              <p className="mb-0">{t('footer.phone')} 09.00-18.00 / +90850 600 00 30</p>
            </div>
            <div className="agreements d-flex flex-wrap justify-content-center mb-3 text-center">
              <p className="mb-0">{t('footer.privacy')}</p>
              <p className="mb-0">{t('footer.terms')}</p>
              <p className="mb-0">{t('footer.salesAndPurchase')}</p>
              <p className="mb-0">{t('footer.personalData')}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
