import React, { useState, useEffect } from 'react'

// MUI Core
import Grid from '@mui/material/Grid2'
import LinearProgress from '@mui/material/LinearProgress'

// Componets
import UploadFile from '../components/UploadFile'
import { Notifications } from '../components'

// Services
import { uploadFiles } from '../apis/fileService.js'

const PageMyStyles = () => {

  const [ uploadStatus, setUploadStatus ] = useState('')
  const [ isUploading, setIsUploading ] = useState(false)

  // Value from input onChange
  const [ uploadFilesData, setUploadFilesData ] = useState()

  const [ isNotificationOpen, setIsNotificationOpen ] = useState(false)
  
  useEffect( () => {
    if( uploadFilesData ) {
      handleUploadFiles( uploadFilesData )
    }

    if( uploadStatus ) {
      setIsNotificationOpen(true)
    }
  }, [ uploadStatus, uploadFilesData ] )

  // TODO: I believe this can be simplified. We can remove the state uploadFilesData and just set e.target.value to '' in the handleChange
  const handleUploadFiles = async () => {
    try {

      const formData = new FormData()

      formData.append( 'files', uploadFilesData )

      const { data: { message } } = await uploadFiles( formData )
      
      setUploadStatus(message)
      setIsUploading(false)
      setUploadFilesData()
    } catch (error) {
      console.error(`Error uploading files: ${error}`)
      setUploadStatus('Error uploading files')
      setIsUploading(false)
      setUploadFilesData()
    }
  }

  return (
    <Grid 
      container
      sx={ { height: '100%' } }
    >
      <Grid item size={12}>
        <UploadFile
          loading={isUploading}
          disabled={isUploading}
          handleChange={ event => {
            setUploadStatus()
            if ( !event.target.files && !event.target.files.length ) {
              setUploadStatus('No files selected')
              return
            }

            setIsUploading(true)

            setUploadFilesData( event.target.files[0] )

            // Clear the event target values so that files of the same name can be uploaded again
            event.target.value = ''
          } }
        />
      </Grid>
      <Notifications
        message={uploadStatus}
        open={isNotificationOpen}
        setOpen={setIsNotificationOpen}
        severity={ uploadStatus == 'File uploaded successfully' ? 'success' : 'error' }
      />
    </Grid>
  )
}

export default PageMyStyles