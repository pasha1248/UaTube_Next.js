/** @format */

import { getContentType } from '../utils/api.utils'
/** @format */

import axios from 'axios'

export const axiosClassic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  withCredentials: true,
  headers: getContentType(),
})
