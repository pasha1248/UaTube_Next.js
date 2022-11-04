/** @format */

import { IBase } from './base.interface'
import { IComment } from './comment.interface'
import { ISubscription, IUser } from './user.interface'

export interface IVideo extends IBase {
  name: string

  isPublic: boolean

  views?: number

  likes?: number

  duration?: number

  description: string

  videoPath: string

  thumbnailPath: string

  user?: IUser

  comments: IComment[]
}

export interface IVideoDto extends IVideo {}
