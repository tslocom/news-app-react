import { useState } from 'react'
import Home from './pages/Home.jsx'
import Bookmarks from './pages/Bookmarks.jsx'
import NavBar from './components/NavBar.jsx'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [savedArticles, setSavedArticles] = useState([]);
  const addSavedArticle = (item) => {
    const alreadySaved = savedArticles.some(savedItem => savedItem.id === item.id)
    if (!alreadySaved) {
      setSavedArticles(savedArticles => [...savedArticles, item])
    }}
  return (
    console.log(currentPage),
    console.log(savedArticles),
    <div className='app'>
      {currentPage === 'home' && <Home onSave={addSavedArticle}/>}
      {currentPage === 'saved' && <Bookmarks savedArticles={savedArticles} />}
      <NavBar setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App