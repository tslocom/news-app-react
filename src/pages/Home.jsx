import { useState } from 'react'
import NewsFeed from '../components/NewsFeed.jsx'
import './Home.css'

function Home({ onSave, setCurrentPage }) {
  return (
    <div className='home'>
      <h1>Welcome to the Anti News App</h1>
      <NewsFeed onSave={onSave}/>
    </div>
  )
}

export default Home