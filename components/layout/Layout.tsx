/** @format */

import Head from 'next/head'
import React, { FC, PropsWithChildren } from 'react'
import Header from './header/Header'
import styles from './Layout.module.scss'
import Sidebar from './sidebar/Sidebar'

type Props = {}

const Layout: FC<PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.main}>
        <Sidebar />
        <section className={styles.container}>
          <Header />
          <div className={styles.wrapper}>{children}</div>
        </section>
      </div>
    </div>
  )
}

export default Layout
