const BASE_URL = "http://localhost:3001";
export const getSavedArticles = async () => {
      const response = await fetch(`${BASE_URL}/saved`);
      const data = await response.json();
      return(data)
    };

export const addSavedArticle = async (item) => {
      const response = await fetch(`${BASE_URL}/saved`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
      });
      if (response.ok) {
        const savedItem = await response.json();
        return(savedItem); 
    }}

export const removeSavedArticle = async (id) => {
  const response = await fetch (`http://localhost:3001/saved/${id}`, {
    method: "DELETE"
  })
  if (response.ok) {
    return id;
  }}