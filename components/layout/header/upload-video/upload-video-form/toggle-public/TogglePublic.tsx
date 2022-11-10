/** @format */

import { Switch } from '@headlessui/react'
import React, { FC } from 'react'

import styles from './TogglePublic.module.scss'
import cn from 'classnames'

const TogglePublic: FC<any> = ({ isEnabled, clickHandler }) => {
  return (
    <div className={styles.wrapper}>
      <Switch
        checked={isEnabled}
        onChange={clickHandler}
        className={cn(styles.swutch, {
          'bg-primary bg-opacity-80': isEnabled,
          'bg-gray-200': !isEnabled,
        })}
      >
        <span
          className={cn(styles.point, {
            'translate-x-6': isEnabled,
            'translate-x-1': !isEnabled,
          })}
        />
      </Switch>
      <span onClick={clickHandler}>Public video</span>
    </div>
  )
}

export default TogglePublic
