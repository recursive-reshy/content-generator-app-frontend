import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

// Pages
import PageChatBot from './pages/PageChatBot'
import PageMyStyles from './pages/PageMyStyles'

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
          element={ <PageMyStyles /> }
        />
      </Routes>
    </Router>
  )
}

export default App
