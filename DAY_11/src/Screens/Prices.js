import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader";
import Price from "../Components/Price";
import api from "../api";

export default function Prices() {
  const [loading, setLoading] = useState(true);
  const [prices, setPrices] = useState([]);
  async function getPrices() {
    try {
      const { data } = await api.getPrices();
      setPrices(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getPrices();
  }, []);
  return loading ? (
    <Loader />
  ) : (
    prices.map(price => <Price key={price.id} {...price} />)
  );
}
