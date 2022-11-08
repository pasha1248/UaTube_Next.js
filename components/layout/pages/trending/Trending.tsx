/** @format */

import React, { FC } from 'react'
import { IVideo } from '../../../../apps/types/video.interface'
import Layout from '../../Layout'
import Catalog from '../home/catalog/Catalog'

type Props = {}

const Trending: FC<{ topVideos: IVideo[] }> = ({ topVideos }) => {
  return (
    <Layout title='Trend'>
      <Catalog newVideos={topVideos} />
    </Layout>
  )
}

export default Trending
