/** @format */

import React, { FC } from 'react'
import { api } from '../../../../apps/store/api/api'
import { videoApi } from '../../../../apps/store/api/video.api'
import Loader from '../../../ui/loader/Loader'
import Layout from '../../Layout'
import Catalog from '../home/catalog/Catalog'

type Props = {}

const Studio: FC = () => {
  const { data, isLoading } = api.useGetProfileQuery(null)

  const [removeVideo] = videoApi.useDeleteVideoMutation()

  const videos = data?.videos

  return (
    <Layout title='Studio'>
      <div>
        {isLoading ? (
          <Loader count={5} />
        ) : videos?.length ? (
          <Catalog
            newVideos={videos}
            removeHandler={removeVideo}
            isUpdateLink
          />
        ) : (
          <p>Video is not found!</p>
        )}
      </div>
    </Layout>
  )
}

export default Studio
