import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import CreatePost from './Pages/CreatePost'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CreatePost/>} />
        <Route path='/create-post' element={<CreatePost/>} />
        <Route path='/about' element={<h1>About</h1>} />
      </Routes>
    </Router>
  )
}

export default App