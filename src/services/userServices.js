const BASE_URL = "http://127.0.0.1:8000/api/users/";

export const signup = async (email, password) => {
    const response = await fetch(`${BASE_URL}signup/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
    });
    if (response.ok) {
      const token = await response.json();
      localStorage.setItem('token', token.token);
      return true;

  }
}

export const login = async (email, password) => {
      const response = await fetch(`${BASE_URL}login/`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: email,
            password: password,
          }),
      });
      if (response.ok) {
        const token = await response.json();
        localStorage.setItem('token', token.token);
        return true;
    }}

export const logout = () => {
    localStorage.removeItem('token');
}