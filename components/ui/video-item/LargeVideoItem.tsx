/** @format */

import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { IVideo } from '../../../apps/types/video.interface'
import UserAvatar from '../user.avatar/UserAvatar'
import VideoDuration from './VideoDuration'
import styles from './VideoItem.module.scss'
import VideoStatistics from './VideoStatistics'

const LargeVideoItem: FC<{ video: IVideo }> = ({ video }) => {
  return (
    <div className={cn(styles.video_item, styles.large_item)}>
      <div className={styles.thumbnail}>
        {video.thumbnailPath && (
          <Image
            src={video.thumbnailPath}
            alt={video.name}
            priority
            className={styles['bg-image']}
          />
        )}
        <VideoDuration isBottom duration={video.duration} />

        <div className={styles.information}>
          <Link href={`/v/${video.id}`}>
            <p className={styles.name}>{video.name}</p>
          </Link>
          {video?.user?.avatarPath && <UserAvatar user={video.user} isWhite />}

          <div className={styles.author}>{video.user?.name}</div>

          <VideoStatistics views={video.views} createAt={video.createdAt} />
        </div>
      </div>
    </div>
  )
}

export default LargeVideoItem
