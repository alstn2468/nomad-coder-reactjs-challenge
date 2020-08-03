import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader";
import api from "../api";
import Exchange from "../Components/Exchange";

export default function CoinExchanges({
  match: {
    params: { id }
  }
}) {
  const [loading, setLoading] = useState(true);
  const [exchanges, setExchanges] = useState([]);
  async function getMarkets() {
    try {
      const { data } = await api.getCoinExchanges(id);
      setExchanges(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getMarkets();
  }, []);
  return loading ? (
    <Loader />
  ) : (
    exchanges
      .filter(exchange => exchange.fiats.length > 0)
      .map(exchange => <Exchange key={exchange.id} {...exchange} />)
  );
}
