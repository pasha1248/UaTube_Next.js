/** @format */

import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { UserService } from '../../apps/services/user/user.service'
import { IUser } from '../../apps/types/user.interface'
import Channel from '../../components/layout/pages/channel/Channel'
import { IChannel } from '../../components/layout/pages/channel/channel.interface'

const ChannelPage: NextPage<IChannel> = ({ channel }) => {
  return <Channel channel={channel} />
}
export default ChannelPage

// @ts-ignore
export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data: users } = await UserService.getAll()

    const paths = users.map(user => ({
      params: {
        id: String(user.id),
      },
    }))

    return {
      paths,
      fallback: 'blocking',
    }
  } catch (e) {
    return {
      paths: [],
      fullback: false,
    }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { data: channel } = await UserService.getOneUser(Number(params?.id))

    return {
      props: {
        channel,
      } as IChannel,
    }
  } catch (e) {
    return {
      props: {
        channel: {} as IUser,
      } as IChannel,
    }
  }
}
