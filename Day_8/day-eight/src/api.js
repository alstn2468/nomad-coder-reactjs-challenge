import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coinpaprika.com/v1"
});

const getPrices = () => api.get("/tickers");
const getExchanges = () => api.get("/exchanges");
const getCoins = () => api.get("/coins");
const getCoinDetail = id => api.get(`/coins/${id}`);
const getCoinExchanges = id => api.get(`/coins/${id}/exchanges`);
const getCoinMarkets = id => api.get(`/coins/${id}/markets`);

export default {
  getPrices,
  getExchanges,
  getCoins,
  getCoinDetail,
  getCoinExchanges,
  getCoinMarkets
};
