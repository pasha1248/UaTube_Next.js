/** @format */

import React, { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'

type Props = {}

const Loader: FC<SkeletonProps> = (props: Props) => {
  return (
    <Skeleton
      baseColor='#2d2c35'
      highlightColor='#353340'
      className='rounded-xl h-8 my-1'
      {...props}
    />
  )
}

export default Loader
