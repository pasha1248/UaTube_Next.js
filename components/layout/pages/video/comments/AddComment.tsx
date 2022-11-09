/** @format */

import React, { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { commentApi } from '../../../../../apps/store/api/comment.api'
import { ICommentDto } from '../../../../../apps/types/comment.interface'
import Field from '../../../../ui/field/Field'
import styles from './Comments.module.scss'
import { MdSend } from 'react-icons/md'

const AddCommentForm: FC<{ videoId: number }> = ({ videoId }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ICommentDto>({
    mode: 'onChange',
  })

  const [writeComment, { isLoading }] = commentApi.useCreateCommentMutation()

  const onSubmit: SubmitHandler<ICommentDto> = async data => {
    writeComment({ ...data, videoId })
      .unwrap()
      .then(() => reset())
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={'relative'}>
        <Field
          {...register('message', {
            required: 'Message required',
          })}
          placeholder='Write comment'
          error={errors.message}
        />

        <button
          className={'text-xl absolute right-2 top-1.5 text-purple'}
          disabled={isLoading}
        >
          <MdSend />
        </button>
      </div>
    </form>
  )
}

export default AddCommentForm
