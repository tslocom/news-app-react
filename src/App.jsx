import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import InitialTagSelector from './pages/InitialTagSelector.jsx'
import InitialPublicationSelector from './pages/InitialPublicationSelector.jsx'
import AppLayout from './components/AppLayout.jsx'

function App() {
  const token = localStorage.getItem('token')

  return (
    <div className='app'>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/choosepublications" element={<InitialPublicationSelector />} />
        <Route path="/choosetags" element={<InitialTagSelector />} />
        <Route path="/" element={<Navigate replace to={token ? '/home' : '/login'} />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
          <Route path="/home" element={<Home type="newsfeed" />} />
          <Route path="/bookmarks" element={<Home type="bookmarks" />} />
          <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App