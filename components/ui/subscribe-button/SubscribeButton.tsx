/** @format */

import React, { FC } from 'react'
import cn from 'classnames'
import styles from './SubscribeButton.module.scss'
import { BsPersonPlusFill } from 'react-icons/bs'
import { useAuth } from '../../../apps/hooks/useAuth'
import { api } from '../../../apps/store/api/api'

type Props = {}

const SubscribeButton: FC<{ channelIdFortSubscribe: number }> = ({
  channelIdFortSubscribe,
}) => {
  const { user } = useAuth()
  const { data: profile } = api.useGetProfileQuery(null, {
    skip: !user,
  })

  const [subscribe, { data, isLoading }] = api.useSubscribeToChannelMutation()

  if (user?.id === channelIdFortSubscribe) return null

  const isSubscribed =
    profile?.subscriptions?.some(
      sub => sub.toChanne.id === channelIdFortSubscribe
    ) || !!data

  return (
    <button
      className={cn(styles.button, {
        [styles.subscribed]: isSubscribed,
      })}
      onClick={() => subscribe(channelIdFortSubscribe).unwrap()}
      disabled={isLoading}
    >
      <BsPersonPlusFill />
      {isSubscribed ? 'Please subscribe' : 'You are a subscriber'}
    </button>
  )
}

export default SubscribeButton
