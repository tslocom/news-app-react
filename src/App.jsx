import { useState } from 'react'
import { useEffect } from 'react'
import { getSavedArticles } from './services/articleServices.js'
import { addSavedArticle } from './services/articleServices.js'
import { removeSavedArticle } from './services/articleServices.js'
import Home from './pages/Home.jsx'
import Bookmarks from './pages/Bookmarks.jsx'
import NavBar from './components/NavBar.jsx'
import Search from './pages/Search.jsx'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [savedArticles, setSavedArticles] = useState([]);
 useEffect(() => {
  getSavedArticles().then(setSavedArticles);
}, []);
  const onSave = (item) => {
    addSavedArticle(item).then(savedItem => {
      setSavedArticles([...savedArticles, savedItem])})
    }
    const onUnsave = async (id) => {
        const deletedId = await removeSavedArticle(id);
        if (deletedId) {
          setSavedArticles(prevArticles =>
              prevArticles.filter(article => article.id !== deletedId)
          );
        }
      }
    
  return (
    <div className='app'>
      {currentPage === 'home' && <Home onSave={onSave} onUnsave={onUnsave} savedArticles={savedArticles}/>}
      {currentPage === 'saved' && <Bookmarks savedArticles={savedArticles} />}
      {currentPage === 'search' && <Search />}
      <NavBar setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App