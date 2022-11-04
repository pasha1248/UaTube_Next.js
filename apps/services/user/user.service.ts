/** @format */

import { axiosClassic } from '../../api/axios'
import { IUser } from '../../types/user.interface'

export const UserService = {
  async getAll() {
    return axiosClassic.get<IUser[]>('/user')
  },

  async getOneUser(id: number) {
    return axiosClassic.get<IUser>(`/user/by-id/${id}`)
  },
}
