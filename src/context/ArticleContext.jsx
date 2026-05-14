import { createContext, useState, useContext, useEffect } from "react";
import { getArticles, getSavedArticles, addSavedArticle, removeSavedArticle } from "../services/articleServices";
import { useLocation } from "react-router-dom";

const ArticleContext = createContext()
const BookmarkContext = createContext();

export const useFeed = () => {
  const context = useContext(ArticleContext);
  if (!context) {
    throw new Error("useFeed must be used within a FeedProvider");
  }
  return context;
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("useBookmarks must be used within a FeedProvider");
  }
  return context;
};

export const FeedProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const location = useLocation()

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && location.pathname === '/home') {
      getArticles(token).then(setArticles);
    }
  }, [location.pathname]);

  return (
    <ArticleContext.Provider value={{ articles }}>
      {children}
    </ArticleContext.Provider>
  );
};

export const BookmarkProvider = ({ children }) => {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getSavedArticles(token).then(setSavedArticles);
    }
  }, []);

  const onSave = (item) => {
    const token = localStorage.getItem('token');
    addSavedArticle(item, token).then((returnedItem) => {
      if (returnedItem) {
        setSavedArticles(prev => [...prev, item]);
      }
    });
  };

  const onUnsave = async (id) => {
    const token = localStorage.getItem('token');
    const deletedId = await removeSavedArticle(id, token);
    if (deletedId) {
      setSavedArticles(prev => prev.filter(a => a.id !== deletedId));
    }
  };

  return (
    <BookmarkContext.Provider value={{ savedArticles, onSave, onUnsave }}>
      {children}
    </BookmarkContext.Provider>
  );
};

