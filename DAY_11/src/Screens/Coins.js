import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader";
import Coin from "../Components/Coin";
import api from "../api";

export default function Coins() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  async function getCoins() {
    try {
      const { data } = await api.getCoins();
      setCoins(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getCoins();
  }, []);
  return loading ? (
    <Loader />
  ) : (
    coins
      .filter(coin => coin.rank !== 0)
      .sort((first, second) => first.rank - second.rank)
      .map(coin => <Coin key={coin.id} {...coin} />)
  );
}
