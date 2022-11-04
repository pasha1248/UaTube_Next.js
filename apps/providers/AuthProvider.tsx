/** @format */

import dynamic from 'next/dynamic'
import { FC, PropsWithChildren } from 'react'
import { TypeComponentAithFields } from './privateRoutes.interface'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), {
  ssr: false,
})

const AuthProvider: FC<PropsWithChildren<TypeComponentAithFields>> = ({
  Component: { isOnlyUser },
  children,
}) => {
  return !isOnlyUser ? (
    <>{children}</>
  ) : (
    <DynamicCheckRole Component={{ isOnlyUser }}>{children}</DynamicCheckRole>
  )
}

export default AuthProvider
