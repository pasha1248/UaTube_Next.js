/** @format */

import { axiosClassic } from '../../api/axios'
import { IVideo } from '../../types/video.interface'

export const UserService = {
  async getAllVideos() {
    return axiosClassic.get<IVideo[]>('/video')
  },

  async getMostPopularVideos(id: number) {
    return axiosClassic.get<IVideo>(`/video/most-popular`)
  },
}
