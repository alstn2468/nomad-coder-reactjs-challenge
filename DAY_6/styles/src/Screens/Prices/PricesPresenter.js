import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Price from "../../Components/Price";
import Message from "../../Components/Message";

const Container = styled.div``;

const PricesPresenter = ({ results, error, loading }) => (
    <Container>
        {loading ? (
            <Loader />
        ) : error ? (
            <Message message={error} color="red" />
        ) : (
            results.map((result, idx) => (
                <Price
                    key={idx}
                    name={result.name}
                    symbol={result.symbol}
                    price={result.quotes.USD.price}
                />
            ))
        )}
    </Container>
);

PricesPresenter.propTypes = {
    results: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            symbol: PropTypes.string,
            price: PropTypes.number,
        })
    ),
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
};

export default PricesPresenter;
