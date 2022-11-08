/** @format */

import React, { FC } from 'react'
import { useSearh } from './useSearch'
import styles from './Search.module.scss'
import { BiSearchAlt } from 'react-icons/bi'
import VideoItem from '../../../ui/video-item/VideoItem'

const Search: FC = () => {
  const { data, handleSearch, searchTerm, isSuccess } = useSearh()

  return (
    <div className={styles.search_top}>
      <label>
        <input
          type='text'
          placeholder='Video search'
          value={searchTerm}
          onChange={handleSearch}
        />
        <BiSearchAlt className={styles.iconSearch} color={'white'} size={24} />
      </label>
      {isSuccess && (
        <div className={styles.result}>
          {data?.length ? (
            data.map(video => <VideoItem isSmall item={video} key={video.id} />)
          ) : (
            <div className='text-white'>Video is not found</div>
          )}
        </div>
      )}
    </div>
  )
}

export default Search
