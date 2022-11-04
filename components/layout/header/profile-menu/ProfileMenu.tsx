/** @format */

import Image from 'next/image'
import React from 'react'
import { useActions } from '../../../../apps/hooks/useActions'
import { useAuth } from '../../../../apps/hooks/useAuth'
import { useOutside } from '../../../../apps/hooks/useOutside'
import { api } from '../../../../apps/store/api/api'
import styles from './ProfileMenu.module.scss'
import { GoChevronUp, GoChevronDown } from 'react-icons/go'
import Link from 'next/link'

type Props = {}

const ProfileMenu = (props: Props) => {
  const { user } = useAuth()

  const { data, isLoading } = api.useGetProfileQuery(null, {
    skip: !user,
  })

  const { isShow, setIsShow, ref } = useOutside(false)

  const { logout } = useActions()

  if (isLoading) {
    return null
  }

  return (
    <div ref={ref} className={styles.wrapper}>
      <button onClick={() => setIsShow(!isShow)}>
        <Image
          src={data?.avatarPath || ''}
          alt={data?.name || ''}
          width={40}
          height={40}
          priority
        />
        <span className={styles.name}>{data?.name}</span>
        {isShow ? <GoChevronUp /> : <GoChevronDown />}
      </button>

      {isShow && (
        <div className={styles['profile-menu']}>
          <ul>
            <li>
              <Link href={`/c/${user?.id}`}>
                <p>My Chanal</p>
              </Link>
            </li>
            <li>
              <Link href={`/studio`}>
                <p>My Video</p>
              </Link>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default ProfileMenu
