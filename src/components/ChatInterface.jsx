import React, { useState } from 'react'

// MUI Core
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import CircularProgress from '@mui/material/CircularProgress'

// MUI Icons
import SendIcon from '@mui/icons-material/Send'

import { postMessage } from '../apis/messagesService'

const ChatInterface = () => {

  const [ userMessage, setUserMessage ] = useState('')
  const [ messages, setUserMessages ] = useState([])
  const [ loading, setLoading ] = useState(false)

  const handleSend = async () => {
    if ( !userMessage.trim() ) return

    setUserMessages( prevState => [ ...prevState, { sender: "user", text: userMessage } ] )
    setUserMessage('')
    setLoading(true)

    try {
      const { data: { response } } = await postMessage( { message: userMessage } )
      
      const aiMessage = { sender: 'ai', text: response || 'Error generating response.' }
      setUserMessages( prevState => [ ...prevState, aiMessage ] )
    } catch (error) {
      console.error(`Error fetching AI response: ${error}`)
    }
    
    setLoading(false)
  }

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
        <Typography
          variant="h6"
          gutterBottom
        >
          Chat
        </Typography>
        <List sx={ { flexGrow: 1, overflowY: 'auto' } }>
          { messages.map( ( { sender, text }, index ) => (
              <ListItem 
                key={index}
                sx={ { 
                  justifyContent: sender == 'user' ? 'flex-end' : 'flex-start' 
                } }
              >
                <ListItemText
                  primary={text}
                  sx={ { 
                    bgcolor: sender === 'user' ? 'primary.light' : 'grey.300', 
                    p: 1,
                    borderRadius: 1 
                  } }
                />
              </ListItem>
            )
          ) }
          { loading && <CircularProgress size={24} sx={ { alignSelf: "center" } } /> }
        </List>
        <TextField
          value={userMessage}
          variant="outlined"
          placeholder="Message"
          fullWidth
          autoFocus
          onChange={ e => setUserMessage( e.target.value ) }
          onKeyDown={ e => e.key === "Enter" && handleSend() }
          slotProps={ {
            input: {
              endAdornment:
                <IconButton 
                  color="primary" 
                  onClick={handleSend} 
                  disabled={loading}
                >
                  <SendIcon />
                </IconButton>
            }
          } }
        />
      </Paper>
    </Container>
  )
}

export default ChatInterface