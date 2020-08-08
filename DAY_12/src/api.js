import axios from "axios";

const api = axios.create({ baseURL: "https://yts-proxy.now.sh" });

export const getMovies = (page = 1) =>
    api.get("/list_movies.json", { params: { page, limit: 50 } });
