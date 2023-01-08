import { FiMail } from 'react-icons/fi'
import { TiKeyOutline } from 'react-icons/ti'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { AiOutlineInbox } from 'react-icons/ai'
import { GiBroadsword } from 'react-icons/gi'
import { BiWallet, BiMessage } from 'react-icons/bi'
import { GoGift } from 'react-icons/go'
import i18n from 'i18next'
const { t } = i18n

const globals = {
  home: 'https://www.bynogame.com/',
  instagram: 'https://www.instagram.com/bynogamecom/',
  tiktok: 'https://www.tiktok.com/@bynogame?lang=tr-TR',
  telegram: 'https://t.me/ByNoGame'
}

const products = [
  {
    title: 'Valorant Battle Pass',
    description: 'pointsInfo',
    price: 130,
    discount: 18.47,
    image: 'https://cdn.bynogame.com/images/1640079026793.jpeg'
  },
  {
    title: 'Valorant Points 175 VP',
    description: 'pointsInfo2',
    price: 17,
    discount: 16.24,
    image: 'https://cdn.bynogame.com/avatar/1644768643294.webp'
  },
  {
    title: 'Valorant Points 740 VP',
    description: 'pointsInfo2',
    price: 70,
    discount: 16.44,
    image: 'https://cdn.bynogame.com/avatar/1644768680178.webp'
  },
  {
    title: 'Valorant Points 1450 VP',
    description: 'pointsInfo2',
    price: 130,
    discount: 18.47,
    image: 'https://cdn.bynogame.com/avatar/1644768699331.webp'
  },
  {
    title: 'Valorant Points 2850 VP',
    description: 'pointsInfo2',
    price: 250,
    discount: 18.4,
    image: 'https://cdn.bynogame.com/avatar/1644768714111.webp'
  },
  {
    title: 'Valorant Points 5250 VP',
    description: 'pointsInfo2',
    price: 450,
    discount: 18.45,
    image: 'https://cdn.bynogame.com/avatar/1644768730762.webp'
  },
  {
    title: 'Valorant Points 8500 VP',
    description: 'pointsInfo2',
    price: 700,
    discount: 18.57,
    image: 'https://cdn.bynogame.com/avatar/1644768749732.webp'
  }
]

const searches = [
  {
    title: 'Knight Online GB Alım Satım ve Gold Bar'
  },
  {
    title: 'Valorant Points'
  },
  {
    title: 'PUBG Mobile Unknown Cash'
  },
  {
    title: 'CS:GO Skin'
  }
]

const questions = [
  {
    title: 'whatIsValorant',
    href: '#what-is-valorant'
  },
  {
    title: 'whatIsValorantVp',
    href: '#what-is-valorant-vp'
  },
  {
    title: 'howToSetVp',
    href: '#how-to-set-vp'
  },
  {
    title: 'systemRequirements',
    href: '#system-requirements'
  },
  {
    title: 'valorantCharacters',
    href: '#valorant-characters'
  },
  {
    title: 'Valorant SSS',
    href: '#valorant-sss'
  }
]

const slides = [
  [
    {
      title: '1600 League of Legends RP',
      price: 130,
      discount: 18,
      image: 'https://cdn.bynogame.com/avatar/lol-1600-rp-1660822795925.webp'
    },
    {
      title: 'Valorant Points 8500 VP',
      price: 700,
      discount: 19,
      image: 'https://cdn.bynogame.com/avatar/1644768749732.webp'
    }
  ],
  [
    {
      title: 'Google play 100 TL League of Legends: Wild Rift',
      price: 100,
      discount: 1,
      image: 'https://cdn.bynogame.com/site-images/banner_cem/GOOGLE100TL.jpg'
    },
    {
      title: 'Google play 50 TL League of Legends: Wild Rift',
      price: 50,
      discount: 2,
      image: 'https://cdn.bynogame.com/images/1640288903407.jpeg'
    }
  ],
  [
    {
      title: 'Valorant Points 175 VP',
      price: 17,
      discount: 16,
      image: 'https://cdn.bynogame.com/avatar/1644768643294.webp'
    },
    {
      title: 'Valorant Points 5250 VP',
      price: 450,
      discount: 18,
      image: 'https://cdn.bynogame.com/avatar/1644768730762.webp'
    }
  ],
  [
    {
      title: 'Valorant Battle Pass',
      price: 130,
      discount: 18,
      image: 'https://cdn.bynogame.com/images/1640079026793.jpeg'
    },
    {
      title: 'Valorant Points 740 VP',
      price: 70,
      discount: 16,
      image: 'https://cdn.bynogame.com/avatar/1644768680178.webp'
    }
  ],
  [
    {
      title: '1600 League of Legends RP',
      price: 130,
      discount: 18,
      image: 'https://cdn.bynogame.com/avatar/lol-1600-rp-1660822795925.webp'
    },
    {
      title: 'Valorant Points 8500 VP',
      price: 700,
      discount: 19,
      image: 'https://cdn.bynogame.com/avatar/1644768749732.webp'
    }
  ],
  [
    {
      title: '9200 League of Legends RP',
      price: 700,
      discount: 19,
      image: 'https://cdn.bynogame.com/avatar/lol-9200-rp-1660822831419.webp'
    },
    {
      title: '3150 League of Legends RP',
      price: 250,
      discount: 18,
      image: 'https://cdn.bynogame.com/avatar/lol-3150-rp-1660822808817.webp'
    }
  ],
  [
    {
      title: '850 League of Legends RP',
      price: 70,
      discount: 16,
      image: 'https://cdn.bynogame.com/images/1660890528209.webp'
    },
    {
      title: '200 League of Legends RP',
      price: 17,
      discount: 16,
      image: 'https://cdn.bynogame.com/images/1660890485980.webp'
    }
  ],
  [
    {
      title: 'Google play 100 TL League of Legends: Wild Rift',
      price: 100,
      discount: 1,
      image: 'https://cdn.bynogame.com/site-images/banner_cem/GOOGLE100TL.jpg'
    },
    {
      title: 'Google play 50 TL League of Legends: Wild Rift',
      price: 50,
      discount: 2,
      image: 'https://cdn.bynogame.com/images/1640288903407.jpeg'
    }
  ],
  [
    {
      title: 'Valorant Points 175 VP',
      price: 17,
      discount: 16,
      image: 'https://cdn.bynogame.com/avatar/1644768643294.webp'
    },
    {
      title: 'Valorant Points 5250 VP',
      price: 450,
      discount: 18,
      image: 'https://cdn.bynogame.com/avatar/1644768730762.webp'
    }
  ],
  [
    {
      title: '850 League of Legends RP',
      price: 70,
      discount: 16,
      image: 'https://cdn.bynogame.com/images/1660890528209.webp'
    },
    {
      title: '850 League of Legends RP',
      price: 70,
      discount: 16,
      image: 'https://cdn.bynogame.com/images/1660890528209.webp'
    }
  ]
]

const popularProducts = [
  {
    image: 'https://cdn.bynogame.com/banner/knight-online-felis-1667459702364.webp',
    title: 'Knight Online Felis Gold Bar 100M (Yeni)',
    price: '579.99'
  },
  {
    image: 'https://cdn.bynogame.com/banner/knight-online-pandora-1667459655856.webp',
    title: 'Knight Online Pandora Gold Bar 100M (Yeni)',
    price: '554.99'
  },
  {
    image: 'https://cdn.bynogame.com/images/1640291136367.jpeg',
    title: 'Knight Online 400 Cash',
    price: '87.5'
  },
  {
    image: 'https://cdn.bynogame.com/banner/knight-online-agartha-1667459682644.webp',
    title: 'Knight Online Agartha Gold Bar 100M (Yeni)',
    price: '569.99'
  },
  {
    image:
      'https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEAaR4uURrwvz0N252yVaDVWrRTno9m4ccG2GNqxlQoZrC2aG9hcVGUWflbX_drrVu5UGki5sAij6tOtQ/300fx300f',
    title: 'Mann Co. Supply Create Key',
    price: '41.22',
    discount_price: '34.24'
  }
]

const mobileMenuItems = [
  {
    icon: <FiMail size={20} />,
    title: 'activation'
  },
  {
    icon: <TiKeyOutline size={20} />,
    title: 'forgotPassword'
  },
  {
    icon: <MdOutlineAccountCircle size={20} />,
    title: 'account'
  },
  {
    icon: <AiOutlineInbox size={20} />,
    title: 'orders'
  },
  {
    icon: <GiBroadsword size={20} />,
    title: 'sales'
  },
  {
    icon: <BiWallet size={20} />,
    title: 'pay'
  },
  {
    icon: <GoGift size={20} />,
    title: 'cupons'
  },
  {
    icon: <BiMessage size={20} />,
    title: 'supportRequests'
  }
]

const mobileLeftMenuItems = [
  {
    title: 'games'
  },
  {
    title: 'knight'
  },
  {
    title: 'skin'
  },
  {
    title: 'valorantVp'
  },
  {
    title: 'razer'
  },
  {
    title: 'pubgUc'
  },
  {
    title: 'steam'
  },
  {
    title: 'market'
  },
  {
    title: 'support'
  },
  {
    title: 'pay'
  }
]

export { globals, products, searches, questions, slides, popularProducts, mobileMenuItems, mobileLeftMenuItems }
