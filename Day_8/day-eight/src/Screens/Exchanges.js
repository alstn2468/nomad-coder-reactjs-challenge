import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader";
import Exchange from "../Components/Exchange";
import api from "../api";

export default function Exchanges() {
  const [loading, setLoading] = useState(true);
  const [exchanges, setExchanges] = useState([]);
  async function getExchanges() {
    try {
      const { data } = await api.getExchanges();
      setExchanges(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getExchanges();
  }, []);
  return loading ? (
    <Loader />
  ) : (
    exchanges.map(exchange => <Exchange key={exchange.id} {...exchange} />)
  );
}
