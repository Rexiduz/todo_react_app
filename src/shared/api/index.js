import axios from "axios";
const SERVER_URL = 'https://candidate.neversitup.com/todo'

const api = axios.create({
  baseURL: SERVER_URL
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.token;
  
  if (token) {
    config.headers.common = {
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});


const client = axios.create({
  url: SERVER_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});
export { client, api };
