import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Router } from 'react-router-dom'
import { FeedProvider, BookmarkProvider } from './context/ArticleContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <FeedProvider>
        <BookmarkProvider>
          <App />
        </BookmarkProvider>
      </FeedProvider>
    </BrowserRouter>
  </StrictMode>,
)
