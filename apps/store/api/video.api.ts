/** @format */

import { IVideo, IVideoDto } from './../../types/video.interface'
/** @format */

import { IComment, ICommentDto } from './../../types/comment.interface'
import { api } from './api'

export const videoApi = api.injectEndpoints({
  endpoints: builder => ({
    getVideosBySearchTerm: builder.query<IVideo[], string>({
      query: searchTerm => ({ url: `/${'video'}`, params: { searchTerm } }),
    }),

    getVideoById: builder.query<IVideo, number>({
      query: id => `/${'video'}/${id}`,
      providesTags: (result, error, id) => [{ type: 'Video', id }],
    }),
    getVideoPrivate: builder.query<IVideo, number>({
      query: id => `/${'video'}/get-private/${id}`,
      providesTags: (result, error, id) => [{ type: 'Video', id }],
    }),
    createVideo: builder.mutation<string, void>({
      query: () => ({
        url: `/${'video'}`,
        method: 'POST',
      }),
      invalidatesTags: () => [{ type: 'Profile' }],
    }),
    updateVideo: builder.mutation<IVideo, IVideoDto>({
      query: ({ id, ...body }) => ({
        url: `/${'video'}/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Video', id },
        { type: 'Profile' },
      ],
    }),
    updateViews: builder.mutation<IVideo, number>({
      query: id => ({
        url: `/${'video'}/update-views/${id}}`,
        method: 'PUT',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Video', id }],
    }),
    updateLikes: builder.mutation<IVideo, number>({
      query: id => ({
        url: `/${'video'}/update-likes/${id}`,
        method: 'PUT',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Video', id }],
    }),
    deleteVideo: builder.mutation<void, number>({
      query: id => ({
        url: `/${'video'}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [{ type: 'Video' }, { type: 'Profile' }],
    }),
  }),
})
