import React from 'react'

// MUI Core
import Grid from '@mui/material/Grid2'

// Components
import ChatInterface from '../components/ChatInterface'

const PageChatBot = () => {
  return (
    <Grid 
      container
      sx={ { height: '100%' } }
    >
      <Grid item size={12}>
        <ChatInterface />
      </Grid>
    </Grid>
  )
}

export default PageChatBot