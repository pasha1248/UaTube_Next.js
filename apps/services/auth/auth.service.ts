/** @format */

import { axiosClassic } from '../../api/axios'
import { IAuthData } from './auth.helper'

export const AuthServiceFront = {
  async login(email: string, password: string) {
    const response = await axiosClassic.post<IAuthData>('auth/login', {
      email,
      password,
    })

    return response.data
  },

  async register(email: string, password: string) {
    const response = await axiosClassic.post<IAuthData>('auth/registration', {
      email,
      password,
    })

    return response.data
  },
}
