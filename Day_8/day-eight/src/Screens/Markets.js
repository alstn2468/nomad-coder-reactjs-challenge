import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader";
import api from "../api";
import Market from "../Components/Market";

export default function Markets({
  match: {
    params: { id }
  }
}) {
  const [loading, setLoading] = useState(true);
  const [markets, setMarkets] = useState([]);
  async function getMarkets() {
    try {
      const { data } = await api.getCoinMarkets(id);
      setMarkets(data);
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
    markets
      .filter(market => market.market_url)
      .map((market, index) => (
        <Market
          key={market.id || index}
          url={market.market_url}
          name={market.exchange_name}
        />
      ))
  );
}
