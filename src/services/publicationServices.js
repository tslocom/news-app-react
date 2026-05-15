const BASE_URL = `${import.meta.env.VITE_API_URL}/api/articles/`;

export const getPublications = async () => {
    const token = localStorage.getItem('token')
    const response = await fetch(`${BASE_URL}publications/`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${token}`
        }
      });
      const data = await response.json();
      return(data.publications)
}

export const getFollowedPublications = async () => {
    const token = localStorage.getItem('token')
    const response = await fetch(`${BASE_URL}followedpublications/`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        }
    });
    const data = await response.json();
    return(data.publications)
}

export const addFollowedPublication = async (item) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}followedpublications/+/`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        },
        body: JSON.stringify(item)
    });
    if (response.ok) {
        return(item);
    }}

export const removeFollowedPublication = async (id) => {
  const token = localStorage.getItem('token');
  const response = await fetch (`${BASE_URL}followedpublications/${id}/`, {
    method: "DELETE",
    headers: {
    "Content-Type": "application/json",
    "Authorization": `Token ${token}`
          },
  })
  if (response.ok) {
    return(id);
  }}