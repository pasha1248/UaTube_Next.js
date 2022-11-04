/** @format */

import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'
import { useAuth } from '../hooks/useAuth'
import { TypeComponentAithFields } from './privateRoutes.interface'

const CheckRole: FC<PropsWithChildren<TypeComponentAithFields>> = ({
  children,
  Component: { isOnlyUser },
}) => {
  const { isLoading, user } = useAuth()

  const { replace, pathname } = useRouter()

  const Children = () => <>{children}</>

  if (isLoading) {
    return null
  }

  if (user) {
    return <Children />
  }

  if (isOnlyUser) pathname !== '/' && replace('/')

  return null
}

export default CheckRole
