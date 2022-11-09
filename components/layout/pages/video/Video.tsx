/** @format */

import React, { FC } from 'react'
import Layout from '../../Layout'
import VideoPlayer from './video-player/VideoPlayer'
import styles from './Video.module.scss'
import cn from 'classnames'
import { useRouter } from 'next/router'
import { IVideo } from '../../../../apps/types/video.interface'
import { videoApi } from '../../../../apps/store/api/video.api'
import Comments from './comments/Comments'
import VideoDetail from './video-detail/VideoDetail'
import { IUser } from '../../../../apps/types/user.interface'

interface Props {}

const Video: FC = (props: Props) => {
  const { query } = useRouter()

  const { data: video = {} as IVideo } = videoApi.useGetVideoByIdQuery(
    Number(query.id),
    {
      skip: !query?.id,
    }
  )

  const [updateViews] = videoApi.useUpdateViewsMutation()

  React.useEffect(() => {
    if (query.id) {
      updateViews(Number(query.id))
    }
  }, [query.id])

  return (
    <Layout title={video.name}>
      <div className={styles.layout}>
        <VideoPlayer videoPath={video.videoPath} />
        <Comments videoId={video.id} comments={video.comments || []} />
      </div>

      <div className={cn(styles.layout, 'mt-7')}>
        <VideoDetail video={video} channel={video.user || ({} as IUser)} />
        <div></div>
      </div>
    </Layout>
  )
}

export default Video
