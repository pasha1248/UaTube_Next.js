/** @format */

import Link from 'next/link'
import React, { FC } from 'react'
import Line from '../../ui/line/Line'
import Menu from './menu/Menu'
import { menu } from './menu/menu.data'
import style from './Sidebar.module.scss'

interface Props {}

const Sidebar: FC = (props: Props) => {
  return (
    <aside className={style.sidebar}>
      <Link href={'/'}>
        <p className={style.logo}>App for You 1.1.1</p>
      </Link>

      <Menu title={'Menu'} items={menu} />
      <Line />
      <div className={style.copy}>2022 Developer Pavlo Ivashkiv</div>
    </aside>
  )
}

export default Sidebar
