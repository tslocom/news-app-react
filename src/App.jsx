import { useState } from 'react'
import NewsFeed from './components/NewsFeed.jsx'
import NavBar from './components/NavBar.jsx'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Anti News App</h1>
      <NewsFeed />
      <NavBar />
    </div>
  )
}

export default App