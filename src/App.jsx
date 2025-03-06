import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

// Pages
import PageChatBot from './pages/PageChatBot'

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/"
          element={ <PageChatBot /> }
        />
        <Route
          path="upload"
          element={ <h1>Upload</h1> }
        />
      </Routes>
    </Router>
  )
}

export default App
