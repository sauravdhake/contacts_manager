import React from 'react'

import { FileUploader } from "react-drag-drop-files";


const fileTypes = ["CSV"];

const ImportContact = () => {

    
    const onDrop = async(file) => {

        
    }

  return (
    <div className='import'>
      <FileUploader handleChange={onDrop} types={fileTypes} name="file" />
    </div>
  )
}

export default ImportContact;