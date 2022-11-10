/** @format */

import { useRouter } from 'next/router'
import React, { FC } from 'react'

type Props = {}

const VideoEdit: FC = () => {
  const { query } = useRouter()

  return <div>VideoEdit</div>
}

export default VideoEdit
