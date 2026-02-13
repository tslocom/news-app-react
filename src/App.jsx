import { useState } from 'react'
import { useEffect } from 'react'
import Home from './pages/Home.jsx'
import Bookmarks from './pages/Bookmarks.jsx'
import NavBar from './components/NavBar.jsx'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [savedArticles, setSavedArticles] = useState([]);
  useEffect(() => {
    const getSavedArticles = async () => {
      const response = await fetch("http://localhost:3001/saved");
      const data = await response.json();
      setSavedArticles(data);
    };
  getSavedArticles();
  }, [])
  const addSavedArticle = async (item) => {
      const response = await fetch("http://localhost:3001/saved", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
      });
      if (response.ok) {
        const savedItem = await response.json();
        setSavedArticles([...savedArticles, savedItem]); 
    }}
  const removeSavedArticle = async (id) => {
    const response = await fetch (`http://localhost:3001/saved/${id}`, {
      method: "DELETE"
    })
    if (response.ok) {
      setSavedArticles(prev => prev.filter(article => article.id !== id));
  }};
  return (
    <div className='app'>
      {currentPage === 'home' && <Home onSave={addSavedArticle} onUnsave={removeSavedArticle} savedArticles={savedArticles}/>}
      {currentPage === 'saved' && <Bookmarks savedArticles={savedArticles} />}
      <NavBar setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App