  import { useState } from 'react'
  import ArticleMenu from './ArticleMenu.jsx'
  import './NewsFeed.css'

  function NewsFeed({ onSave }) {
  const [articles, setArticles] = useState([
    {id: 1, title: 'Apple Releases New AppleTV 4K', link: 'insert link here', summary: 'Apple has announced the release of the new AppleTV 4K with improved performance and features.'},
    {id: 2, title: 'SpaceX Launches New Rocket', link: 'insert link here', summary: 'SpaceX successfully launched its latest rocket, marking a significant milestone in space exploration.'},
    {id: 3, title: 'New 50 Series GPUs Staying in Stock', link: 'insert link here', summary: 'New 50 Series GPUs are now available and staying in stock due to improved supply chain management.'},
  ])

  const [openMenuId, setOpenMenuId] = useState()

  return (
    <div className='news-feed'>
      {articles.map(item => (
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
             />
          </div>
        </div>
      ))}
    </div>
  )
  }

  export default NewsFeed