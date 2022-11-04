/** @format */

import React from 'react'
import { useAuth } from '../../../../apps/hooks/useAuth'
import AuthForm from '../auth-form/AuthForm'
import ProfileMenu from '../profile-menu/ProfileMenu'
import UploadVideo from '../upload-video/UploadVideo'
import styles from './IconsRight.module.scss'

type Props = {}

const IconsRight = (props: Props) => {
  const { user } = useAuth()

  return (
    <div className={styles.icons}>
      {user ? (
        <>
          <ProfileMenu />
          <UploadVideo />
        </>
      ) : (
        <AuthForm />
      )}
    </div>
  )
}

export default IconsRight
