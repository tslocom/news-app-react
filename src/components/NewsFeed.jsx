  import { useState } from 'react'
  import { useEffect } from 'react'
  import ArticleMenu from './ArticleMenu.jsx'
  import './NewsFeed.css'

  function NewsFeed({ onSave, onUnsave, savedArticles }) {
  const [articles, setArticles] = useState([])
    useEffect(() => {
      const getArticles = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/articles/newsfeed");
        const data = await response.json();
        setArticles(data.articles);
      };
    getArticles();
    }, [])

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