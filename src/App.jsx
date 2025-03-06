import React from 'react'

// MUI Core
import Container from '@mui/material/Container'

// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

// Pages
import PageChatBot from './pages/PageChatBot'
import PageMyStyles from './pages/PageMyStyles'

function App() {
  return (
    <Container
      sx={ { height: 'calc(100vh - 16px)' } }
    >
      <Router>
        <Routes>
          <Route 
            path="/"
            element={ <PageChatBot /> }
          />
          <Route
            path="upload"
            element={ <PageMyStyles /> }
          />
        </Routes>
      </Router>
    </Container>
  )
}

export default App
