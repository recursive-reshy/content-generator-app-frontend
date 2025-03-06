import React from 'react'

// MUI Core
import Grid from '@mui/material/Grid2'

// Componets
import UploadFile from '../components/UploadFile'

const PageMyStyles = () => {
  return (
    <Grid 
      container
      sx={ { height: '100%' } }
    >
      <Grid item size={12}>
        <UploadFile />
      </Grid>
    </Grid>
  )
}

export default PageMyStyles