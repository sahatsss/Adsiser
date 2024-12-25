import axios from "axios";

const api = axios.create({
  baseURL: "https://api.npoint.io/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export { api };
