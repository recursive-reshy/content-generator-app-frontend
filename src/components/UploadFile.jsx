import React from 'react'

// MUI Core
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import { styled } from '@mui/material/styles'

// MUI Icons
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

const Input = styled('input')( {
  position: 'absolute',
  bottom: 0,
  left: 0,
  height: 1,
  width: 1,
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
} )

const UploadFile = ( {
  handleChange,
  loading = false,
  disabled = false,
} ) => {
  return (
    <Button
      variant="contained"
      component="label"
      role={undefined}
      tabIndex={-1}
      startIcon={ loading ? <CircularProgress size={24} /> : <CloudUploadIcon /> }
      disabled={disabled}
    >
      <>
        Upload files
        <Input
          type="file"
          multiple
          onChange={ event => handleChange(event) }
        />
      </>
    </Button>
  )
}

export default UploadFile