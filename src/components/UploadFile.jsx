import React from 'react'

// MUI Core
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

// MUI Icons
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

const VisuallyHiddenInput = styled('input')( {
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

const UploadFile = () => {
  return (
    <Container
      maxWidth="lg"
      sx={ { 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', 
        height: 'calc(100vh - 16px)',
      } }
    >
      <Paper
        elevation={3}
        sx={ { 
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
          p: 2,
        } }
      >
        <Button
          variant="contained"
          component="label"
          role={undefined}
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload files
          <VisuallyHiddenInput
            type="file"
            multiple
            onChange={ event => console.log( event.target.files ) }
          />
        </Button>
      </Paper>
    </Container>
  )
}

export default UploadFile