  import { useState, useEffect } from 'react'
  import { getArticles, getSavedArticles, addSavedArticle, removeSavedArticle } from '../services/articleServices.js'
  import ArticleMenu from './ArticleMenu.jsx'
  import './NewsFeed.css'

  function NewsFeed() {

    const [articles, setArticles] = useState([]);
    useEffect(() => {
      getArticles().then(setArticles);
    }, []);

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
    

    const [openMenuId, setOpenMenuId] = useState()

    return (
      <div className='news-feed'>
        {articles.map(item => {
          const isBookmarked = savedArticles.some(saved => saved.id === item.id);
          return (
          <div key={item.id} className='news-article' style={{ zIndex: openMenuId === item.id ? 999 : 1, position: 'relative' }}>
            <div key={item.id} className='news-card'>
              <a href={item.link} className="main-link">
              <h1>{item.title}</h1>
              <p className='news-summary'>{item.summary}</p>
              </a>
              <ArticleMenu item={item}
              isOpen={openMenuId === item.id}
              toggleMenu={() => setOpenMenuId(openMenuId === item.id ? null : item.id)}
              onSave={onSave}
              onUnsave={onUnsave}
              isSaved={isBookmarked}
              />
            </div>
          </div>
        )})}
      </div>
    )
  }

  export default NewsFeed