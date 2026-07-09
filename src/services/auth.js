import api from "../api/api";

export const login = async (email, password) => {
  const response = await api.post("/auth/login", {
    email,
    password,
  });

  const { token, user } = response.data;

  localStorage.setItem("token", token);
  localStorage.setItem("role", user.role);
  localStorage.setItem("user", JSON.stringify(user));

  return response.data;
};

export const register = async (name, email, password, role) => {
  const response = await api.post("/auth/register", {
    name,
    email,
    password,
    role,
  });

  const { token, user } = response.data;

  localStorage.setItem("token", token);
  localStorage.setItem("role", user.role);
  localStorage.setItem("user", JSON.stringify(user));

  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("user");
};

export const getRole = () => {
  return localStorage.getItem("role");
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};
