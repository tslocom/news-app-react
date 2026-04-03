import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Bookmarks from './pages/Bookmarks.jsx'
import NavBar from './components/NavBar.jsx'
import Search from './pages/Search.jsx'
import Login from './pages/Login.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import './App.css'

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute><Navigate replace to="/home" /></ProtectedRoute>} />
        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path="/bookmarks" element={<Bookmarks/>} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <NavBar/>
    </div>
  )
}

export default App