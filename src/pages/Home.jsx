import { useState } from 'react'
import NewsFeed from '../components/NewsFeed.jsx'
import './Home.css'

function Home({ onSave, onUnsave, savedArticles }) {
  return (
    <div className='home'>
      <h1>Welcome to the Anti News App</h1>
      <NewsFeed onSave={onSave} onUnsave={onUnsave} savedArticles={savedArticles}/>
    </div>
  )
}

export default Home