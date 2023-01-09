import React from 'react'
import './style.scss'
import Slides from '../Slide'
import i18n from '../../i18n'

function Content() {
  const { t } = i18n
  return (
    <>
      <div className="col-12 content-wrapper bg-white card shadow-sm border-0 p-4 d-xl-none">
        <span className="content-title">{t('main.contentInfo1')}</span>
        <div
          className="mt-3"
          dangerouslySetInnerHTML={{ __html: t('main.paragraph1') }}
        ></div>
        <span className="content-info">{t('main.contentInfo2')}</span>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-12 mt-2">
            <Slides />
          </div>
        </div>
      </div>
      <div
        className={`${
          i18n.language === 'en' ? 'mb-5' : ''
        } col-12 mt-5 content-wrapper bg-white card shadow-sm border-0 p-4`}
      >
        <h2
          id="what-is-valorant"
          className="font-weight-bolder subtitle"
        >
          {t('main.whatIsValorant')}
        </h2>
        <hr className="mt-2 mb-1" />
        <p className=" mt-3">{t('main.paragraph2')}</p>
        <p>{t('main.paragraph3')}</p>
        <p>{t('main.paragraph4')}</p>
        <p>{t('main.paragraph5')}</p>
        <h2
          id="what-is-valorant-vp"
          className="font-weight-bolder subtitle"
        >
          {t('main.whatIsValorantVp')}
        </h2>
        <hr className="mt-2 mb-1" />
        <p
          className=" mt-3"
          dangerouslySetInnerHTML={{ __html: t('main.paragraph6') }}
        ></p>
        <h2
          id="how-to-set-vp"
          className="font-weight-bolder subtitle"
        >
          {t('main.howToSetVp')}
        </h2>
        <hr className="mt-2 mb-1" />
        <ol
          className="mt-3"
          dangerouslySetInnerHTML={{ __html: t('main.list1') }}
        ></ol>
        <h2
          id="system-requirements"
          className="font-weight-bolder subtitle"
        >
          {t('main.systemRequirements')}
        </h2>
        <hr className="mt-2 mb-1" />
        <p className="mt-3 ">
          <strong>{t('main.paragraph7')}</strong>
        </p>
        <p>&nbsp; &nbsp; {t('main.paragraph8')}</p>
        <p>&nbsp; &nbsp; {t('main.paragraph9')}</p>
        <p>&nbsp; &nbsp; {t('main.paragraph10')}</p>
        <p>&nbsp; &nbsp; {t('main.paragraph11')}</p>
        <p>&nbsp; &nbsp; {t('main.paragraph12')}</p>
        <p>
          <strong>{t('main.paragraph13')}</strong>
        </p>
        <p>&nbsp; &nbsp;{t('main.paragraph14')}</p>
        <p>&nbsp; &nbsp;{t('main.paragraph15')}</p>
        <p>&nbsp; &nbsp;{t('main.paragraph16')}</p>
        <p>&nbsp; &nbsp;{t('main.paragraph17')}</p>
        <h2 className="font-weight-bolder subtitle">{t('main.valorantCharacters')}</h2>
        <hr className="mt-2 mb-1" />
        <span
          className="mt-2"
          style={{ fontSize: '12pt', color: '#ff0000' }}
        >
          <strong>{t('main.paragraph18')}</strong>
        </span>
        <p
          className="mt-3"
          dangerouslySetInnerHTML={{ __html: t('main.paragraph19') }}
        ></p>
        <h4 id="valorant-characters">
          <span style={{ fontSize: '12pt', color: '#ff0000' }}>
            <strong>{t('main.valorantCharactersName')}</strong>
          </span>
        </h4>
        <ol dangerouslySetInnerHTML={{ __html: t('main.list2') }}></ol>
        <h2
          id="valorant-sss"
          className="font-weight-bolder subtitle"
        >
          Varolant SSS
        </h2>
        <hr className="mt-2 mb-1" />
        <h2
          className="mt-2"
          style={{ fontWeight: '300' }}
        >
          {t('main.howToUpgradeFPS')}
        </h2>
        <p>{t('main.paragraph20')}</p>
        <p>&nbsp; &nbsp; {t('main.paragraph21')}</p>
        <p>&nbsp; &nbsp; {t('main.paragraph22')}</p>
        <p>&nbsp; &nbsp; {t('main.paragraph23')}</p>
        <h2 style={{ fontWeight: '300' }}>{t('main.paragraph24')}</h2>
        <p>{t('main.paragraph25')}</p>
        <p>{t('main.paragraph26')}</p>
        <p>{t('main.paragraph27')}</p>
        <p>{t('main.paragraph28')}</p>
        <p>&nbsp; &nbsp; {t('main.paragraph29')}</p>
        <p>&nbsp; &nbsp; {t('main.paragraph30')}</p>
        <p>&nbsp; &nbsp; {t('main.paragraph31')}</p>
        <p>&nbsp; &nbsp; {t('main.paragraph32')}</p>
        <p>&nbsp; &nbsp; {t('main.paragraph33')}</p>
        <p>&nbsp; &nbsp; {t('main.paragraph34')}</p>
        <p>&nbsp; &nbsp; {t('main.paragraph35')}</p>
        <p>&nbsp; &nbsp; {t('main.paragraph36')}</p>
        <h2 style={{ fontWeight: '300' }}>{t('main.paragraph37')}</h2>
        <div>{t('main.paragraph38')}</div>
        <h2 style={{ fontWeight: '300' }}>{t('main.paragraph39')}</h2>
        <div>&nbsp;{t('main.paragraph40')}</div>
        <div>{t('main.paragraph41')}</div>
        <div>{t('main.paragraph42')}</div>
        <div>{t('main.paragraph43')}</div>
        <div>{t('main.paragraph44')}</div>
        <div>{t('main.paragraph45')}</div>
        <div>{t('main.paragraph46')}</div>
        <h2 style={{ fontWeight: '300' }}>{t('main.paragraph47')}&nbsp;</h2>
        <div>{t('main.paragraph48')}</div>
        <div>{t('main.paragraph49')}&nbsp;</div>
        <div>{t('main.paragraph50')}</div>
        <div>{t('main.paragraph51')}</div>
        <div>{t('main.paragraph52')}</div>
        <h2 style={{ fontWeight: '300' }}>{t('main.paragraph53')}</h2>
        <div>{t('main.paragraph54')}</div>
        <div>
          &nbsp;{t('main.paragraph55')} &nbsp;
          <a
            className="text-decoration-none text-muted"
            href="http://support-valorant.riotgames.com/tr"
            rel="noopener noreferrer"
            target="_blank"
          >
            support-valorant.riotgames.com/tr
          </a>
          &nbsp;&nbsp;{t('main.paragraph56')}&nbsp;
        </div>
        <div>{t('main.paragraph57')}</div>
        <h2 style={{ fontWeight: '300' }}>{t('main.paragraph58')}</h2>
        <div>{t('main.paragraph59')}</div>
        <div dangerouslySetInnerHTML={{ __html: t('main.paragraph60') }}></div>
      </div>
    </>
  )
}

export default Content
