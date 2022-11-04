/** @format */

import { title } from 'process'
import React, { FC } from 'react'
import Line from '../../../ui/line/Line'
import { IMenuItem } from './menu.interface'
import styles from './Menu.module.scss'
import MenuItem from './MenuItem'

interface IMenu {
  title: string
  items: IMenuItem[]
}

const Menu: FC<IMenu> = ({ items, title }) => {
  return (
    <div className={styles.menuSidebar}>
      <h3>{title}</h3>
      <ul>
        {items.map(item => (
          <MenuItem item={item} key={item.link} />
        ))}
      </ul>

      <Line />
    </div>
  )
}

export default Menu
