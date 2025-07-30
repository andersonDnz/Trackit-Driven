
import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

const api = axios.create({ baseURL: BASE_URL });

function createAuthConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

export function signUp(data) {
  return api.post("/auth/sign-up", data);
}

export function login(data) {
  return api.post("/auth/login", data);
}

export function createHabit(data, token) {
  return api.post("/habits", data, createAuthConfig(token));
}

export function getHabits(token) {
  return api.get("/habits", createAuthConfig(token));
}

export function getTodayHabits(token) {
  return api.get("/habits/today", createAuthConfig(token));
}

export function checkHabit(id, token) {
  return api.post(`/habits/${id}/check`, {}, createAuthConfig(token));
}

export function uncheckHabit(id, token) {
  return api.post(`/habits/${id}/uncheck`, {}, createAuthConfig(token));
}

export default api;
