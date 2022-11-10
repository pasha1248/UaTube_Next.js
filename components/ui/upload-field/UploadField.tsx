/** @format */

import React, { FC } from 'react'
import { IUploadField } from './upload-field.interface'
import styles from './UploadField.module.scss'
import { useUploadFile } from './useUploadFile'

const UploadField: FC<IUploadField> = ({
  title,
  onChange,
  folder,
  setValue,
  setIsChosen,
}) => {
  const { uploadFile } = useUploadFile(onChange, folder, setValue, setIsChosen)

  return (
    <div className={styles.file}>
      {title && <h1>{title}</h1>}
      <label>
        <span className='st-only'>Choice file</span>
        <input type='file' onChange={uploadFile} />
      </label>
    </div>
  )
}

export default UploadField
