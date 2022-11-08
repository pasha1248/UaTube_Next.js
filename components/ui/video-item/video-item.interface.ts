/** @format */

import { IVideo } from './../../../apps/types/video.interface'
/** @format */

export interface IVideoItem {
  item: IVideo
  removeHendler?: (videoId: number) => void
  isUpdateLink?: boolean
  isSmall?: boolean
}
