/** @format */

import React from 'react'
import { IVideo } from '../../../../../apps/types/video.interface'
import LargeVideoItem from '../../../../ui/video-item/LargeVideoItem'
import styles from './Discover.module.scss'

interface IDiscover {
  topVideo: IVideo
  randomVideo: IVideo
}

const Discover: React.FC<IDiscover> = ({ randomVideo, topVideo }) => {
  return (
    <div className={styles.discover}>
      <div className={styles.top_video}>
        <LargeVideoItem video={topVideo} />
      </div>
      <div className={styles.random_video}>
        <LargeVideoItem video={randomVideo} />
      </div>
    </div>
  )
}

export default Discover
