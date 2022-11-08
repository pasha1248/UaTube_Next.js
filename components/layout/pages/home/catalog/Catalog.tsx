/** @format */

import React, { FC } from 'react'
import { IVideo } from '../../../../../apps/types/video.interface'
import Heading from '../../../../ui/heading/Heading'
import VideoItem from '../../../../ui/video-item/VideoItem'
import styles from './Catalog.module.scss'

const Catalog: FC<{
  newVideos: IVideo[]
  removeHandler?: (videoId: number) => void
  isUpdateLink?: boolean
}> = ({ newVideos, isUpdateLink, removeHandler }) => {
  return (
    <div className={styles.recommended}>
      <div className={styles.top_block}>
        <Heading title={removeHandler ? 'My videos' : 'Recomendation'} />
      </div>

      <div className={styles.catalog}>
        {newVideos?.map(video => (
          <VideoItem
            item={video}
            key={video.id}
            removeHendler={removeHandler}
            isUpdateLink={isUpdateLink}
          />
        ))}
      </div>
    </div>
  )
}

export default Catalog
