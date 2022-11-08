/** @format */

import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { VideoService } from '../apps/services/video/video.service'
import { IVideo } from '../apps/types/video.interface'
import Trending from '../components/layout/pages/trending/Trending'

type Props = {}

const TrendingPage: NextPage<{ topVideos: IVideo[] }> = ({ topVideos }) => {
  return <Trending topVideos={topVideos} />
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: topVideos } = await VideoService.getMostPopularVideos()

    return {
      props: {
        topVideos,
      },
      revalidate: 60,
    }
  } catch (e) {
    return {
      props: {
        topVideos: [],
      },
    }
  }
}

export default TrendingPage
