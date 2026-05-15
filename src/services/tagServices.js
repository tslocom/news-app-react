const BASE_URL = `${import.meta.env.VITE_API_URL}/api/articles/`;

export const getTags = async () => {
    const token = localStorage.getItem('token')
    const response = await fetch(`${BASE_URL}tags/`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${token}`
        }
      });
      const data = await response.json();
      return(data.tags)
}

export const getFollowedTags = async () => {
    const token = localStorage.getItem('token')
    const response = await fetch(`${BASE_URL}followedtags/`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        }
    });
    const data = await response.json();
    return(data.tags)
}

export const addFollowedTag = async (item) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}followedtags/+/`, {
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

export const removeFollowedTag = async (id) => {
  const token = localStorage.getItem('token');
  const response = await fetch (`${BASE_URL}followedtags/${id}/`, {
    method: "DELETE",
    headers: {
    "Content-Type": "application/json",
    "Authorization": `Token ${token}`
          },
  })
  if (response.ok) {
    return(id);
  }}

export const getIgnoredTags = async () => {
    const token = localStorage.getItem('token')
    const response = await fetch(`${BASE_URL}ignoredtags/`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        }
    });
    const data = await response.json();
    return(data.tags)
}

export const addIgnoredTag = async (item) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}ignoredtags/+/`, {
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

export const removeIgnoredTag = async (id) => {
  const token = localStorage.getItem('token');
  const response = await fetch (`${BASE_URL}ignoredtags/${id}/`, {
    method: "DELETE",
    headers: {
    "Content-Type": "application/json",
    "Authorization": `Token ${token}`
          },
  })
  if (response.ok) {
    return(id);
  }}