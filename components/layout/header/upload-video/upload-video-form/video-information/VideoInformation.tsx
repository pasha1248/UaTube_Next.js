/** @format */

import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import styles from './VideoInformation.module.scss'

type Props = {}

interface IVideoInformation {
  thumnailPath?: string
  videoId: number
  fileName: string
  isUploaded: boolean
}

const VideoInformation: FC<IVideoInformation> = ({
  videoId,
  fileName,
  isUploaded,
  thumnailPath,
}) => {
  return (
    <div className={styles.info}>
      {!thumnailPath ? (
        <div className={styles.thumbnail}>
          {!isUploaded ? 'loading' : 'You have to upload preview'}
        </div>
      ) : (
        <Image src={thumnailPath} width={344} height={190} alt={''} />
      )}
      <div className={styles.details}>
        <div>
          <span>Video Link</span>
          <span>
            <Link href={`/v/${videoId}`}>
              <p> http://local</p>
            </Link>
          </span>
        </div>
        <span>Filename</span>
        <span>{fileName}</span>
      </div>
    </div>
  )
}

export default VideoInformation
