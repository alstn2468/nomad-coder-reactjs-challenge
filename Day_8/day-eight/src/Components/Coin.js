import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled("div")`
  margin-bottom: 15px;
  text-decoration: underline;
`;

const Ranking = styled("span")`
  font-weight: 600;
`;

const Coin = ({ id, name, symbol, rank }) => (
  <Container>
    <Link to={`coins/${id}`}>
      <Ranking>#{rank}</Ranking> {name}/{symbol} →
    </Link>
  </Container>
);

Coin.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired
};

export default Coin;
