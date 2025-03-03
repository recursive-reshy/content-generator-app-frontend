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

const ChatInterface = () => {

  const [ input, setInput ] = useState('')
  const [ messages, setMessages ] = useState([])
  const [ loading, setLoading ] = useState(false)

  const handleSend = async () => {
    if ( !input.trim() ) return

    setMessages( prevState => [ ...prevState, { sender: "user", text: input } ] )
    setInput('')
    setLoading(true)

    try {
      // Simulate API call to AI model
      const response = await fetch( '/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( { prompt: input } ),
      } )
      
      const data = await response.json()
      const aiMessage = { sender: 'ai', text: data.text || 'Error generating response.' }
      setMessages( prevState => [ ...prevState, aiMessage ] )
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
          value={input}
          variant="outlined"
          placeholder="Message"
          fullWidth
          autoFocus
          onChange={ e => setInput( e.target.value ) }
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