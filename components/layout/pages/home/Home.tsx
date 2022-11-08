/** @format */

import React, { FC } from 'react'
import Layout from '../../Layout'
import Catalog from './catalog/Catalog'
import Discover from './discover/Discover'
import { IHome } from './home.interface'

type Props = {}

const Home: FC<IHome> = ({ newVideos, randomVideo, topVideo }) => {
  return (
    <Layout title='Home Page'>
      <Discover topVideo={topVideo} randomVideo={randomVideo} />
      <Catalog newVideos={newVideos} />
    </Layout>
  )
}

export default Home
