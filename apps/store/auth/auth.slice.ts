/** @format */

import { logout } from './auth.actions'
/** @format */

import { login, register } from './auth.actions'
/** @format */

import { createSlice } from '@reduxjs/toolkit'
import { IAuthInitialState } from './auth.interface'

const initialState: IAuthInitialState = {
  user: null,
  accessToken: '',
  isLoading: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload.user
        state.accessToken = action.payload['accessToken']
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.user = null
        state.accessToken = ''
      })
    //

    builder
      .addCase(login.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload.user
        state.accessToken = action.payload['accessToken']
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.user = null
        state.accessToken = ''
      })
    //
    builder.addCase(logout.fulfilled, state => {
      state.isLoading = false
      state.user = null
      state.accessToken = ''
    })
  },
})
