/** @format */

import React from 'react'
import { HiUpload } from 'react-icons/hi'
import { videoApi } from '../../../../apps/store/api/video.api'
import stylesIcon from '../icons-right/IconsRight.module.scss'

type Props = {}

const UploadVideo = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [videoId, setVideoId] = React.useState<number>(0)

  const [createVideo, { isLoading }] = videoApi.useCreateVideoMutation()

  return (
    <>
      <button
        className={stylesIcon.button}
        disabled={isLoading}
        onClick={() => {
          createVideo()
            .unwrap()
            .then(id => {
              setVideoId(+id)
              setIsOpen(true)
            })
        }}
      >
        <HiUpload />
      </button>
    </>
  )
}

export default UploadVideo
