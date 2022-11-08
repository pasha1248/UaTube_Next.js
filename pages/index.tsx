/** @format */

import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { NextPageAuth } from '../apps/providers/privateRoutes.interface'
import { IVideo } from '../apps/types/video.interface'
import Home from '../components/layout/pages/home/Home'
import { IHome } from '../components/layout/pages/home/home.interface'
import shuffle from 'lodash/shuffle'
import { VideoService } from '../apps/services/video/video.service'

const HomePage: NextPage<IHome> = props => {
  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Home {...props} />
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: newVideos } = await VideoService.getAllVideos()

    const { data: topVideo } = await VideoService.getMostPopularVideos()

    return {
      props: {
        newVideos,
        topVideo: topVideo[0],
        randomVideo:
          shuffle(newVideos.filter(v => v.id !== topVideo[0].id))[0] ||
          ({} as IVideo),
      } as unknown as IHome,
    }
  } catch (e) {
    return {
      props: {
        newVideo: [],
        topVideo: {} as IVideo,
        randomVideo: {} as IVideo,
      },
    }
  }
}

export default HomePage
