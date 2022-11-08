/** @format */

import Link from 'next/link'
import { title } from 'process'
import React, { FC } from 'react'
import { useAuth } from '../../../apps/hooks/useAuth'
import { api } from '../../../apps/store/api/api'
import Line from '../../ui/line/Line'
import Menu from './menu/Menu'
import { menu } from './menu/menu.data'
import style from './Sidebar.module.scss'

interface Props {}

const Sidebar: FC = (props: Props) => {
  const { user } = useAuth()

  const { data, isLoading } = api.useGetProfileQuery(null, {
    skip: !user,
  })

  return (
    <aside className={style.sidebar}>
      <Link href={'/'}>
        <p className={style.logo}>App for You 1.1.1</p>
      </Link>

      <Menu title={'Menu'} items={menu} />

      {user && (
        <Menu
          title='My subscribers'
          items={
            data?.subscriptions.map(({ toChannel }: any) => ({
              image: toChannel.avatarPath,
              title: toChannel.name,
              link: '/c/' + toChannel.id,
            })) || []
          }
        />
      )}
      <Line />
      <div className={style.copy}>2022 Developer Pavlo Ivashkiv</div>
    </aside>
  )
}

export default Sidebar
