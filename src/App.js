import { useState, useEffect } from 'react'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Card from './components/Card/index'
import Nav from './components/Nav/index'
import Content from './components/Content/index'
import MobileMenu from './components/MobileTabMenu/index'
import MobileNavMenu from './components/MobileNavMenu'
import MobileLeftMenu from './components/MobileLeftMenu/index'
import ScrollToTop from 'react-scroll-to-top'
import { MdKeyboardArrowUp } from 'react-icons/md'
import i18n from './i18n'

import { products, questions } from './constant'

function App() {
  const { t } = i18n
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [isLeftMobileMenuOpen, setIsLeftMobileMenuOpen] = useState(false)
  const [showLeftMobileMenu, setShowLeftMobileMenu] = useState(false)
  const [skin, setSkin] = useState(localStorage.getItem('skin') ? localStorage.getItem('skin') : 'light')
  const [lang, setLang] = useState('')

  useEffect(() => {
    if (isMobileNavOpen) setShowMobileMenu(true)
    else setTimeout(() => setShowMobileMenu(false), 300)
  }, [isMobileNavOpen])

  useEffect(() => {
    if (isLeftMobileMenuOpen) setShowLeftMobileMenu(true)
    else setTimeout(() => setShowLeftMobileMenu(false), 200)
  }, [isLeftMobileMenuOpen])

  if (!localStorage.getItem('language')) localStorage.setItem('language', 'tr')

  useEffect(() => {
    if (lang === 'tr') return (window.document.title = 'Valorant VP Satın Al')
    window.document.title = 'Buy Valorant VP'
  }, [lang])

  useEffect(() => {
    localStorage.setItem('skin', skin)
    if (skin === 'dark') document.body.classList.add('dark-mode')
  }, [skin])

  return (
    <div className="App">
      {showMobileMenu && (
        <MobileNavMenu
          isMobileNavOpen={isMobileNavOpen}
          setIsMobileNavOpen={setIsMobileNavOpen}
          skin={skin}
        />
      )}
      {showLeftMobileMenu && (
        <MobileLeftMenu
          isLeftMobileMenuOpen={isLeftMobileMenuOpen}
          setIsLeftMobileMenuOpen={setIsLeftMobileMenuOpen}
        />
      )}
      <Header
        setIsMobileNavOpen={setIsMobileNavOpen}
        setLang={setLang}
        skin={skin}
        setSkin={setSkin}
      />
      <Nav />
      <div className="container">
        <div className="row m-0">
          <div className="col-xl-4 d-none d-xl-flex flex-column pt-4 card content-wrapper pb-3">
            <h1
              className="font-weight-bolder mb-3"
              style={{ fontSize: '1.5rem' }}
            >
              Valorant Points
            </h1>
            <img
              alt=""
              src="https://cdn.bynogame.com/images/1640289080958.jpeg"
              className="mb-3"
            />
            {questions.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.href}
                  className="btn btn-block btn-outline-dark btn-sm font-weight-bold mb-2 mx-3"
                >
                  {index !== 5 ? t(`main.${item.title}`) : item.title}
                </a>
              )
            })}
            <div className="px-3 mt-2">
              <span className="content-title">{t('main.contentInfo1')}</span>
              <div
                className="mt-3"
                dangerouslySetInnerHTML={{ __html: t('main.paragraph1') }}
              ></div>
              <span className="content-info">{t('main.contentInfo2')}</span>
            </div>
          </div>
          <div className="col-12 col-xl-8">
            {products.map((item, index) => {
              return (
                <div key={index}>
                  <Card
                    title={item.title}
                    description={t(`main.${item.description}`)}
                    price={item.price}
                    discount={item.discount}
                    image={item.image}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="col-12 card shadow-sm border-0 p-4 d-xl-none">
              <div className="col-12 d-flex flex-column">
                <h1
                  className="font-weight-bolder mb-3"
                  style={{ fontSize: '1.5rem' }}
                >
                  Valorant Points
                </h1>
                {questions.map((item, index) => {
                  return (
                    <a
                      key={index}
                      href={item.href}
                      className="btn btn-block btn-outline-dark btn-sm font-weight-bold mb-2"
                    >
                      {index !== 5 ? t(`main.${item.title}`) : item.title}
                    </a>
                  )
                })}
              </div>
            </div>
            <Content />
          </div>
        </div>
      </div>
      <Footer />
      <MobileMenu setIsLeftMobileMenuOpen={setIsLeftMobileMenuOpen} />
      <ScrollToTop component={<MdKeyboardArrowUp />} />
    </div>
  )
}

export default App
