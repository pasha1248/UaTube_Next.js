/** @format */

import classNames from 'classnames'
import React, { FC, PropsWithChildren } from 'react'
import { IButton } from './button.interface'
import styles from './Button.module.scss'

type Props = {}

const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button className={classNames(styles.button, className)} {...rest}>
      {children}
    </button>
  )
}

export default Button
