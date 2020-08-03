import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import Loader from "../Components/Loader";
import Markets from "./Markets";
import Exchanges from "./Exchanges";
import api from "../api";

const Title = styled("h1")``;

const Description = styled("p")`
  margin: 30px 0px;
`;

const KeyValueRow = styled("div")`
  margin-bottom: 5px;
`;

const Key = styled("span")`
  font-weight: 600;
`;

const Value = styled("span")``;

const InsideMenu = styled("div")`
  margin: 20px 0px;
`;

const List = styled("ul")`
  display: flex;
`;

const Item = styled("li")`
  margin-right: 20px;
  text-transform: uppercase;
  font-weight: 600;
  border: 2px solid #1abc9c;
  padding: 5px;
  border-radius: 3px;
  background-color: ${props => (props.active ? "#1abc9c" : "transparent")};
  color: ${props => (props.active ? "white" : "black")};
`;

export default function Coin({
  location: { pathname },
  match: {
    params: { id }
  }
}) {
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState([]);
  async function getCoin() {
    try {
      const { data } = await api.getCoinDetail(id);
      setCoin(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getCoin();
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <>
      <>
        <Title>
          {coin.name} / {coin.symbol}
        </Title>
        <Description>{coin.description}</Description>
        <KeyValueRow>
          <Key>Rank:</Key> <Value>{coin.rank}</Value>
        </KeyValueRow>
        <KeyValueRow>
          <Key>Open Source:</Key>{" "}
          <Value>{coin.open_source ? "Yes" : "No"}</Value>
        </KeyValueRow>
        <KeyValueRow>
          <Key>Proof Type:</Key> <Value>{coin.proof_type}</Value>
        </KeyValueRow>
        <KeyValueRow>
          <Key>Structure:</Key> <Value>{coin.org_structure}</Value>
        </KeyValueRow>
        <InsideMenu>
          <List>
            <Item active={pathname === `/coins/${coin.id}/markets`}>
              <Link to={`/coins/${coin.id}/markets`}>Markets</Link>
            </Item>
            <Item active={pathname === `/coins/${coin.id}/exchanges`}>
              <Link to={`/coins/${coin.id}/exchanges`}>Exchanges</Link>
            </Item>
          </List>
        </InsideMenu>
        <Route path="/coins/:id/markets" component={Markets} />
        <Route path="/coins/:id/exchanges" component={Exchanges} />
      </>
    </>
  );
}
