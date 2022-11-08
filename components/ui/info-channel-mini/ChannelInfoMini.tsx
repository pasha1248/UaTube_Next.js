/** @format */

import styles from './ChannelInfoMini.module.scss'

import React, { FC } from 'react'
import { IUser } from '../../../apps/types/user.interface'
import UserAvatar from '../user.avatar/UserAvatar'
import { formatNumberToK } from '../../../apps/utils/format-number'

type Props = {}

const ChannelInfoMini: FC<{ channel: IUser; message?: string }> = ({
  channel,
  message,
}) => {
  return (
    <div className={styles.profile_info}>
      {channel.avatarPath && <UserAvatar user={channel} />}

      <div>
        <div className={styles.name}>{channel.name}</div>
        <div className={styles.subscribers_count}>
          {message || formatNumberToK(channel.subscribersCount || 0)}{' '}
          subscribers
        </div>
      </div>
    </div>
  )
}

export default ChannelInfoMini
