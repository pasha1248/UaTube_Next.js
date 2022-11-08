/** @format */

import React, { ChangeEvent } from 'react'
import { useDebounce } from '../../../../apps/hooks/useDebounce'
import { videoApi } from '../../../../apps/store/api/video.api'

export const useSearh = () => {
  const [searchTerm, setSearchTerm] = React.useState('')

  const debounceSearch = useDebounce(searchTerm, 500)

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const { data, isSuccess } = videoApi.useGetVideosBySearchTermQuery(
    debounceSearch,
    {
      skip: !debounceSearch,
      selectFromResult: ({ data, ...rest }) => ({
        data: data?.slice(0, 4),
        ...rest,
      }),
    }
  )

  return {
    handleSearch,
    data,
    isSuccess,
    searchTerm,
  }
}
