import { useState } from 'react'
import './NewsFeed.css'

function NewsFeed() {
  const [articles, setArticles] = useState([
    {id: 1, title: "Apple Releases New AppleTV 4K", link: "insert link here", summary: "Apple has announced the release of the new AppleTV 4K with improved performance and features."},
    {id: 2, title: "SpaceX Launches New Rocket", link: "insert link here", summary: "SpaceX successfully launched its latest rocket, marking a significant milestone in space exploration."},
    {id: 3, title: "New 50 Series GPUs Staying in Stock", link: "insert link here", summary: "New 50 Series GPUs are now available and staying in stock due to improved supply chain management."},
  ])
  
  return (
    <div className="news-feed">
      {articles.map(item => (
        <a href={item.link} key={item.id} className="news-article">
          <div key={item.id} className="news-card">
            <h1>{item.title}</h1>
            <p className="news-summary">{item.summary}</p>
          </div>
        </a>
      ))}
    </div>
  )
}

export default NewsFeed