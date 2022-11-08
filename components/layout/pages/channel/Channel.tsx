/** @format */

import React, { FC } from 'react'
import ChannelInfoMini from '../../../ui/info-channel-mini/ChannelInfoMini'
import SubscribeButton from '../../../ui/subscribe-button/SubscribeButton'
import Layout from '../../Layout'
import Catalog from '../home/catalog/Catalog'
import { IChannel } from './channel.interface'

type Props = {}

const Channel: FC<IChannel> = ({ channel }) => {
  return (
    <Layout title={channel.name}>
      <div className={'mb-10 w-1/3'}>
        <div className='flex items-center gap-12'>
          <ChannelInfoMini channel={channel} />
          <SubscribeButton channelIdFortSubscribe={channel.id} />
        </div>
        <article className='text-gray-500 mt-3'>{channel.description}</article>
      </div>
      <Catalog newVideos={channel.videos || []} />
    </Layout>
  )
}

export default Channel
