/** @format */

import React, { FC } from 'react'
import styles from './VideoItem.module.scss'

const VideoDuration: FC<{
  duration: number | undefined
  isBottom?: boolean
}> = ({ duration, isBottom }) => {
  return <time className={isBottom ? styles.bottom : ''}>{duration} min.</time>
}

export default VideoDuration
