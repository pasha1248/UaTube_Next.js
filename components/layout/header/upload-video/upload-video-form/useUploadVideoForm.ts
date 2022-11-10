/** @format */

import { IVideoDto } from './../../../../../apps/types/video.interface'
import { SubmitHandler, useForm } from 'react-hook-form'
import { videoApi } from '../../../../../apps/store/api/video.api'
import React from 'react'
import { IMediaResponse } from '../../../../../apps/services/media/media.interface'

interface IUseUploadVideoRorm {
  handleCloseModal: () => void
  videoId: number
}

export const useUploadVideoForm = ({
  handleCloseModal,
  videoId,
}: IUseUploadVideoRorm) => {
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
    watch,
    setValue,
    reset,
  } = useForm<IVideoDto>({
    mode: 'onChange',
  })

  const [updateVideo, { isSuccess }] = videoApi.useUpdateVideoMutation()

  const onSubmit: SubmitHandler<IVideoDto> = data => {
    updateVideo({ ...data, id: videoId })
      .unwrap()
      .then(() => {
        handleCloseModal()
        reset()
      })
  }

  // @ts-ignore
  const videoPath = watch('videoPath')
  const thumbnailPath = watch('thumbnailPath')
  const [videoFileName, setVideoFileName] = React.useState('')

  const handleUploadVideo = (value: IMediaResponse) => {
    setValue('videoPath', value.url)
    setValue('name', value.name)
    setVideoFileName(value.name)
  }

  const [isChosen, setIsChosen] = React.useState(false)

  const [percent, setPercent] = React.useState(0)

  const [isUploaded, setIsUploaded] = React.useState(false)

  const setProgressPercentege = (val: number) => {
    setPercent(val)

    if (val === 100) setIsUploaded(true)
  }

  return {
    form: {
      register,
      errors,
      control,
      handleSubmit,
      onSubmit,
    },
    media: {
      videoPath,
      thumbnailPath,
      videoFileName,
      handleUploadVideo,
    },
    status: {
      isSuccess,
      isChosen,
      setIsChosen,
      percent,
      isUploaded,
      setProgressPercentege,
    },
  }
}
