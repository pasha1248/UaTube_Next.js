/** @format */

import React, { FC } from 'react'
import styles from './Header.module.scss'
import IconsRight from './icons-right/IconsRight'
import Search from './search/Search'

type Props = {}

const Header: FC = (props: Props) => {
  return (
    <header className={styles.header}>
      <Search />
      <IconsRight />
    </header>
  )
}

export default Header
