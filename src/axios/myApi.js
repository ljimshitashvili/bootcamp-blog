import axios from "axios";

const myApi = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api`,
  headers: {
    common: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
      "Content-Type": "multipart/form-data",
    },
  },
});

export default myApi;
