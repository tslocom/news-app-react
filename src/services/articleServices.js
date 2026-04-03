const BASE_URL = "http://127.0.0.1:8000/api/articles/";

export const getArticles = async () => {
      const token = localStorage.getItem('token');
      const response = await fetch(`${BASE_URL}newsfeed/`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${token}`
        }
      });
      const data = await response.json();
      return(data.articles);
      };

export const getSavedArticles = async () => {
      const token = localStorage.getItem('token');
      const response = await fetch(`${BASE_URL}bookmarks/`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${token}`
        }
      });
      const data = await response.json();
      return(data.articles)
    };

export const addSavedArticle = async (item) => {
      const token = localStorage.getItem('token');
      const response = await fetch(`${BASE_URL}bookmarks/`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Token ${token}`
          },
          body: JSON.stringify(item),
      });
      if (response.ok) {
        const savedItem = await response.json();
        return(savedItem); 
    }}

export const removeSavedArticle = async (id) => {
  const token = localStorage.getItem('token');
  const response = await fetch (`${BASE_URL}bookmarks/${id}`, {
    method: "DELETE",
    headers: {
    "Content-Type": "application/json",
    "Authorization": `Token ${token}`
          },
  })
  if (response.ok) {
    return id;
  }}