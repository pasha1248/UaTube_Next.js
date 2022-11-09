/** @format */

import React, { FC } from 'react'
import { useAuth } from '../../../../../apps/hooks/useAuth'
import { IComment } from '../../../../../apps/types/comment.interface'
import AddCommentForm from './AddComment'
import CommentItem from './CommentItem'
import styles from './Comments.module.scss'

type Props = {}

const Comments: FC<{ comments: IComment[]; videoId: number }> = ({
  comments,
  videoId,
}) => {
  const { user } = useAuth()

  return (
    <div className={styles.comments}>
      <h2>Comment</h2>
      <div className={styles.line} />
      {comments.length ? (
        <div className={styles.grid}>
          {comments.map(comment => (
            <CommentItem comment={comment} key={comment.id} />
          ))}
        </div>
      ) : (
        <p>Comments not found</p>
      )}
      <div className={styles.bottomForm}>
        {user && <AddCommentForm videoId={videoId} />}
      </div>
    </div>
  )
}

export default Comments
