import React, { useState } from 'react'

// MUI Core
import Grid from '@mui/material/Grid2'

// Componets
import UploadFile from '../components/UploadFile'

// Services
import { uploadFiles } from '../apis/fileService.js'

const PageMyStyles = () => {

  const [ uploadStatus, setUploadStatus ] = useState('')
  const [ isUploading, setIsUploading ] = useState(false)

  return (
    <Grid 
      container
      sx={ { height: '100%' } }
    >
      <Grid item size={12}>
        <UploadFile
          handleChange={ async event => {
            if ( !event.target.files && !event.target.files.length ) {
              setUploadStatus('No files selected')
              return
            }

            setIsUploading(true)
        
            const formData = new FormData()

            formData.append( 'files', event.target.files[0] )
        
            try {
              const respomse = await uploadFiles( formData )
              setUploadStatus('Files uploaded successfully!')
              setIsUploading(false)
            } catch (error) {
              console.error(`Error uploading files: ${error}`)
              setUploadStatus('Error uploading files')
              setIsUploading(false)
            }
          } }
        />
      </Grid>
    </Grid>
  )
}

export default PageMyStyles