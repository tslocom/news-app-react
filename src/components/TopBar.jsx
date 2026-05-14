import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { search } from '../services/articleServices.js'
import SearchOverlay from './SearchOverlay.jsx'

function TopBar() {
  const navigate = useNavigate();
  const location = useLocation();
  let feedType = 'newsfeed'

  if (location.pathname === '/home') {
    feedType = 'newsfeed';
  }
  else if (location.pathname === '/bookmarks') {
    feedType = 'bookmarks';
  }
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const handleSearch = async (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value.length > 3) {
      const isTagSearch = value.startsWith('#');
      const cleanQuery = isTagSearch ? value.slice(1) : value;
      const results = await search(cleanQuery, feedType, isTagSearch);    
        setIsOverlayOpen(true);
        setSearchResults(results)
      
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
    setIsOverlayOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      clearSearch();
    }}


  return (
      <header className="fixed top-0 left-0 z-50 w-full h-16 md:h-20 bg-white border-b border-slate-200">
        <div className="flex justify-between items-center w-full h-full px-6">
          <div className="text-2xl font-serif font-black tracking-tighter text-slate-900 shrink-0">
            Echo Free News
          </div>
          <div className={`relative hidden md:flex flex-1 max-w-5xl mx-8 items-center border border-slate-200 px-3 py-1 bg-slate-50 focus-within:ring-1 focus-within:ring-slate-900 transition-all ${isOverlayOpen ? 'rounded-t' : 'rounded'}`}>
            <span className="material-symbols-outlined text-slate-400 text-sm mr-2">search</span>
            <input 
              className="bg-transparent border-none focus:ring-0 text-sm outline-none w-full font-sans"
              placeholder={"Start with a # to search only tags..."}
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              onKeyDown={handleKeyDown}/>
            <SearchOverlay searchResults={searchResults} isOverlayOpen={isOverlayOpen} onClose={clearSearch}/>  
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <button 
              onClick={() => navigate('/profile')}
              className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-slate-50 transition-colors">
              <span className="material-symbols-outlined text-slate-900 cursor-pointer">account_circle</span>
            </button>
          </div>
        </div>  
      </header>
    );
  }


export default TopBar;