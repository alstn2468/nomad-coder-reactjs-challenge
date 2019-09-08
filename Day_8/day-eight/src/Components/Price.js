import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled("div")`
  margin-bottom: 10px;
`;

const Price = ({ name, symbol, quotes }) => (
  <Container>
    {name} / {symbol}: ${quotes.USD.price}
  </Container>
);

Price.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  quotes: PropTypes.shape({
    USD: PropTypes.shape({
      price: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};

export default Price;
