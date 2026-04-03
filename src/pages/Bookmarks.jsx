import { useState, useEffect } from "react";
import { getSavedArticles } from "../services/articleServices.js";
import ArticleMenu from '../components/ArticleMenu.jsx'

function Bookmarks() {
    const [openMenuId, setOpenMenuId] = useState()

    const [savedArticles, setSavedArticles] = useState([]);
        useEffect(() => {
            getSavedArticles().then(setSavedArticles);
        }, []);


    return (
        <div className='news-feed'>
        {savedArticles.map(item => (
            <div key={item.id} className='news-article' style={{ zIndex: openMenuId === item.id ? 999 : 1, position: 'relative' }}>
                <div key={item.id} className='news-card'>
                    <a href={item.link} className="main-link">
                    <h1>{item.title}</h1>
                    <p className='news-summary'>{item.summary}</p>
                    </a>
                    <ArticleMenu item={item}
                    isOpen={openMenuId === item.id}
                    toggleMenu={() => setOpenMenuId(openMenuId === item.id ? null : item.id)} />
                </div>
            </div>
        ))}
        </div>
    )
    }

export default Bookmarks