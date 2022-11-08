/** @format */

import dayjs from 'dayjs'
import React, { FC } from 'react'
import { formatNumberToK } from '../../../apps/utils/format-number'
import styles from './VideoItem.module.scss'
import relativeTime from 'dayjs/plugin/relativeTime'

interface IVideoStatistics {
  views: number
  createAt?: string
}

dayjs.extend(relativeTime)

const VideoStatistics: FC<IVideoStatistics> = ({ views, createAt }) => {
  return (
    <div className={styles.number_info}>
      <div className={styles.views}>{formatNumberToK(views)} views</div>

      {!!createAt && (
        <>
          <div className='mx-2'>.</div>
          <div className={styles.date}>
            {/*@ts-ignore*/}
            {dayjs(new Date(createAt)).fromNow()}
          </div>
        </>
      )}
    </div>
  )
}

export default VideoStatistics
