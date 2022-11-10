/** @format */

import React, { FC } from 'react'
import { Controller } from 'react-hook-form'
import { IMediaResponse } from '../../../../../apps/services/media/media.interface'
import Field from '../../../../ui/field/Field'
import TextArea from '../../../../ui/text-area/TextArea'
import UploadField from '../../../../ui/upload-field/UploadField'
import FooterForm from './footer-form/FooterForm'
import SeccessMessage from './SeccessMessage'
import TogglePublic from './toggle-public/TogglePublic'
import { useUploadVideoForm } from './useUploadVideoForm'
import VideoInformation from './video-information/VideoInformation'

interface IUseUploadVideoForm {
  handleCloseModal: () => void
  videoId: number
}

const UploadVideoForm: FC<IUseUploadVideoForm> = ({
  handleCloseModal,
  videoId,
}) => {
  const { form, status, media } = useUploadVideoForm({
    videoId,
    handleCloseModal,
  })

  return (
    <form
      onSubmit={form.handleSubmit(form.onSubmit)}
      className='flex flex-wrap'
    >
      {status.isSuccess && <SeccessMessage />}
      {status.isChosen ? (
        <>
          <div className='w-7/12 pr-6 pt-3'>
            <Field
              {...form.register('name', {
                required: 'Name is required',
              })}
              placeholder='Name'
              error={form.errors.name}
            />
            <TextArea
              {...form.register('description', {
                required: 'Description is required',
              })}
              placeholder='Description'
              error={form.errors.description}
            />

            <div className='mt-8'>
              <Controller
                control={form.control}
                name='thumbnailPath'
                render={({ field: { onChange } }) => (
                  <UploadField
                    folder='thumbnails'
                    onChange={(value: IMediaResponse) => {
                      onChange(value.url)
                    }}
                  />
                )}
              />
            </div>
            <Controller
              control={form.control}
              name='isPublic'
              render={({ field: { onChange, value } }) => (
                <TogglePublic
                  clickHandler={() => {
                    onChange(!value)
                  }}
                  isEnabled={!!value}
                />
              )}
            />
          </div>
          <div className={'w-5/12 p-3 pl-10'}>
            <VideoInformation
              fileName={media.videoFileName}
              videoId={videoId}
              isUploaded={status.isUploaded}
              thumnailPath={media.thumbnailPath}
            />
          </div>

          <FooterForm isUploaded={status.isUploaded} percent={status.percent} />
        </>
      ) : (
        <div className=''>
          <Controller
            control={form.control}
            name='videoPath'
            render={() => (
              <UploadField
                title={'Need upload video'}
                folder='videos'
                onChange={media.handleUploadVideo}
                setValue={status.setProgressPercentege}
                setIsChosen={status.setIsChosen}
              />
            )}
          />
        </div>
      )}
    </form>
  )
}

export default UploadVideoForm
