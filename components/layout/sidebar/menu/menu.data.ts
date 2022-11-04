/** @format */

import { IMenuItem } from './menu.interface'
import { HiHome, HiChartBar, HiStar, HiCollection } from 'react-icons/hi'

export const menu: IMenuItem[] = [
  {
    title: 'Main',
    icon: HiHome,
    link: '/',
  },
  {
    title: 'Trand',
    icon: HiChartBar,
    link: '/trending',
  },
  {
    title: 'My chanel',
    icon: HiStar,
    link: '/my-channel',
  },
  {
    title: 'My subscribers',
    icon: HiCollection,
    link: '/subscriptions',
  },
]
