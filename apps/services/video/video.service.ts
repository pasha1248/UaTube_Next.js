/** @format */

import { axiosClassic } from '../../api/axios'
import { IVideo } from '../../types/video.interface'

export const VideoService = {
  async getAllVideos() {
    return axiosClassic.get<IVideo[]>('/video')
  },

  async getMostPopularVideos() {
    return axiosClassic.get<IVideo[]>(`/video/most-popular`)
  },
}
