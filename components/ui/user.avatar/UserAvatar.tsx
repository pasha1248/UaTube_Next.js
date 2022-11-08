/** @format */

import Link from 'next/link'
import React, { FC } from 'react'
import { IUser } from '../../../apps/types/user.interface'
import cn from 'classnames'
import Image from 'next/image'
import styles from './UserAvatar.module.scss'
import { AiFillCheckCircle } from 'react-icons/ai'

const UserAvatar: FC<{ user: IUser; isWhite?: boolean }> = ({
  user,
  isWhite,
}) => {
  return (
    <Link href={`/c/${user.id}`}>
      <p>
        <span className={cn(styles.avatar, { [styles.white]: isWhite })}>
          <Image
            width={45}
            height={45}
            alt={user.name}
            src={user.avatarPath || ''}
          />
          {user.isVerified && (
            <span className={styles.isVerified}>
              <AiFillCheckCircle className={styles.isVerified} />
            </span>
          )}
        </span>
      </p>
    </Link>
  )
}

export default UserAvatar
