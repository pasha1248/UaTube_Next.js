/** @format */

import { TypeRootState } from './../store'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IUser } from '../../types/user.interface'

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Video', 'Profile'],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as TypeRootState).auth.accessToken

      console.log(token)

      if (token) headers.set('Authorization', `Bearer ${token}`)
      return headers
    },
  }),
  endpoints: builder => ({
    getProfile: builder.query<IUser, any>({
      query: () => `${'user'}/profile`,
      providesTags: () => [{ type: 'Profile' }],
    }),
    subscribeToChannel: builder.mutation<boolean, number>({
      query: channelId => ({
        url: `${'user'}/subscribe/${channelId}`,
        method: 'PATCH',
      }),
      invalidatesTags: () => [{ type: 'Profile' }],
    }),
  }),
})
