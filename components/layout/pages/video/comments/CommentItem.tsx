/** @format */

import React, { FC } from 'react'
import { IComment } from '../../../../../apps/types/comment.interface'
import ChannelInfoMini from '../../../../ui/info-channel-mini/ChannelInfoMini'
import styles from './Comments.module.scss'

type Props = {}

const CommentItem: FC<{ comment: IComment }> = ({ comment }) => {
  return (
    <div className={styles.commentItem}>
      <ChannelInfoMini channel={comment.user} message={comment.message} />
    </div>
  )
}

export default CommentItem
