/** @format */

/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAuthFields } from '../../../components/layout/header/auth-form/auth-form.interface'
import { IAuthData } from '../../services/auth/auth.helper'
import { AuthServiceFront } from '../../services/auth/auth.service'
import { toastr } from 'react-redux-toastr'
import { toastError } from '../../utils/api.utils'

export const register = createAsyncThunk<IAuthData, IAuthFields>(
  'auth/register',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await AuthServiceFront.register(email, password)

      toastr.success('Sign up', 'Registration is secessful')
      return response
    } catch (e) {
      toastError(e)
      return thunkAPI.rejectWithValue(e)
    }
  }
)

export const login = createAsyncThunk<IAuthData, IAuthFields>(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await AuthServiceFront.login(email, password)

      toastr.success('Sign in', 'Login is secessful')
      return response
    } catch (e) {
      toastError(e)
      return thunkAPI.rejectWithValue(e)
    }
  }
)

export const logout = createAsyncThunk('auth/logout', async () => {
  return {}
})
