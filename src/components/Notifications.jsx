import React from 'react'

// MUI Core
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import IconButton from '@mui/material/IconButton'

// MUI Icons
import CloseIcon from '@mui/icons-material/Close'

// TODO: Refactor to use notification service
const Notifications = ( { 
  message,
  autoHideDuration = 5000,
  open,
  setOpen,
  severity = 'success',
  anchorOrigin = 	{ vertical: 'bottom', horizontal: 'center' }
} ) => {

  return (
    <Snackbar 
      open={open}
      autoHideDuration={autoHideDuration}
      severity={severity}
      onClose={ () => setOpen(false) }
      anchorOrigin={anchorOrigin}
    >
      <Alert
        severity={severity}
        variant="filled"
        onClose={ () => setOpen(false) }
        sx={ { width: '100%' } }
      >
        { message }
      </Alert>
    </Snackbar>
  )
}

export default Notifications