import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 400px;
    font-size: 16px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 2px solid black;
`;

const Name = styled.h2`
    font-weight: 600;
    padding-right: 5px;
`;

const Symbol = styled.div`
    padding-left: 5px;
    padding-right: 10px;
`;

const Price = ({ name, symbol, price }) => (
    <Container>
        <Name>{name}</Name> / <Symbol>{symbol}</Symbol> : ＄{price}
    </Container>
);

Price.propTypes = {
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default Price;
