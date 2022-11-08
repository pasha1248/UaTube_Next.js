/** @format */

import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { IVideoItem } from './video-item.interface'
import cn from 'classnames'
import styles from './VideoItem.module.scss'
import { BiEdit, BiTrash } from 'react-icons/bi'
import Image from 'next/image'
import VideoDuration from './VideoDuration'
import Link from 'next/link'
import VideoStatistics from './VideoStatistics'
import UserAvatar from '../user.avatar/UserAvatar'

const VideoItem: FC<IVideoItem> = ({
  isSmall,
  isUpdateLink,
  removeHendler,
  item,
}) => {
  const { push } = useRouter()

  return (
    <div
      className={cn(styles.video_item, {
        [styles.small]: isSmall,
      })}
    >
      {!!removeHendler && (
        <button
          className={'absolute bottom-3 right-3 z-10'}
          onClick={() => removeHendler(item.id)}
        >
          <BiTrash className='text-lg text-red-700' />
        </button>
      )}
      {isUpdateLink && (
        <button
          className={'absolute bottom-3 right-11 z-10'}
          onClick={() => push(`/video/edit/${item.id}`)}
        >
          <BiEdit className='text-lg text-blue-600' />
        </button>
      )}

      <div className={styles.thumbnail}>
        {item.thumbnailPath && (
          <Image
            src={item.thumbnailPath}
            alt={item.name}
            width={185}
            height={103}
            priority
          />
        )}
        <VideoDuration duration={item.duration} />

        {item?.user?.avatarPath && (
          <div className='absolute right-3 -bottom-7'>
            <UserAvatar user={item.user} />
          </div>
        )}
      </div>

      <div className={styles.information}>
        {!isSmall && <div className={styles.author}>{item.user?.name}</div>}
        <Link href={`/v/${item.id}`}>
          <p className={styles.name}>{item.name}</p>
        </Link>
        <VideoStatistics
          views={item.views}
          createAt={!isSmall ? item.createdAt : undefined}
        />
      </div>
    </div>
  )
}

export default VideoItem
