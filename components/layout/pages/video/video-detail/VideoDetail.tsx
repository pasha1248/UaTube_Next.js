/** @format */

import React, { FC } from 'react'
import { IoEyeSharp } from 'react-icons/io5'
import { videoApi } from '../../../../../apps/store/api/video.api'
import { IUser } from '../../../../../apps/types/user.interface'
import { IVideo } from '../../../../../apps/types/video.interface'
import { formatNumberToK } from '../../../../../apps/utils/format-number'
import ChannelInfoMini from '../../../../ui/info-channel-mini/ChannelInfoMini'
import SubscribeButton from '../../../../ui/subscribe-button/SubscribeButton'
import styles from './VideoDetail.module.scss'
import { RiHeart2Fill } from 'react-icons/ri'
import { HiCalendar } from 'react-icons/hi'
import dayjs from 'dayjs'

type Props = {}

const VideoDetail: FC<{ video: IVideo; channel: IUser }> = ({
  video,
  channel,
}) => {
  const [updateLike, { isLoading: isLikeLoading }] =
    videoApi.useUpdateLikesMutation()

  return (
    <div className={styles.detail}>
      <div>
        <ChannelInfoMini channel={channel} />

        <h1>{video.name}</h1>

        <article className={styles.article}>{video.description}</article>
      </div>

      <div className='pt-2'>
        <div className={styles.wrapper_button}>
          {video.user?.id && (
            <SubscribeButton channelIdFortSubscribe={video.user.id} />
          )}

          <button
            className={styles.likeButton}
            disabled={isLikeLoading}
            onClick={() => updateLike(video.id)}
          >
            {' '}
            Like
          </button>
        </div>

        <div className={styles.number_info}>
          <div>
            <IoEyeSharp />
            <span>{formatNumberToK(video.views)} views</span>
          </div>
          <div>
            <RiHeart2Fill />
            <span>{formatNumberToK(Number(video.likes))} likes</span>
          </div>
          <div>
            <HiCalendar />
            <span>{dayjs(new Date(video.createdAt)).fromNow()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoDetail
