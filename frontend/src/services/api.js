import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const login = (username, password) => {
  return api.post("/api/token/", {
    username,
    password
  });
};

export const getSecret = (token) => {
  return api.get("/api/secret/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getHello = () => {
    return api.get("/api/hello/")
}

export default api;