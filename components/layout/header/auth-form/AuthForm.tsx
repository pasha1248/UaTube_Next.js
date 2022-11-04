/** @format */

import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useOutside } from '../../../../apps/hooks/useOutside'
import { IAuthFields } from './auth-form.interface'
import styles from './AuthForm.module.scss'
import { FaUserCircle } from 'react-icons/fa'
import stylesIcon from '../icons-right/IconsRight.module.scss'
import { validEmail } from './auth.valid'
import Button from '../../../ui/button/Button'
import Field from '../../../ui/field/Field'
import { useActions } from '../../../../apps/hooks/useActions'
import { useAuth } from '../../../../apps/hooks/useAuth'

interface Props {}

const AuthForm = (props: Props) => {
  const { ref, isShow, setIsShow } = useOutside(false)

  const [type, setType] = useState<'login' | 'register'>('login')

  const { login, register: registerAction } = useActions()

  const { isLoading } = useAuth()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IAuthFields>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<IAuthFields> = data => {
    if (type === 'login') {
      return login(data)
    }
    if (type === 'register') {
      return registerAction(data)
    }
  }

  return (
    <div className={styles.wrapper} ref={ref}>
      <button className={stylesIcon.button} onClick={() => setIsShow(!isShow)}>
        <FaUserCircle fill='#A4A4A4' />
      </button>

      {isShow && (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Field
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: validEmail,
                message: 'Email or password is wrong',
              },
            })}
            placeholder='E-mail'
            error={errors.email}
          />

          <Field
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Min length is 6 symbols',
              },
            })}
            placeholder='Password'
            error={errors.password}
          />

          <div className={styles.mainButton}>
            <Button onClick={() => setType('login')} disabled={isLoading}>
              {type === 'login' ? 'Sign in' : 'Sign up'}
            </Button>
          </div>
          <button
            className={styles.register}
            onClick={() => setType('register')}
            disabled={isLoading}
          >
            {type === 'login' ? 'Sign up' : 'Sign in'}
          </button>
        </form>
      )}
    </div>
  )
}

export default AuthForm
