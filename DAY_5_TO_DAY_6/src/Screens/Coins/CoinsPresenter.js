import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Coins from "../../Components/Coins";

const Container = styled.div``;

const CoinsPresenter = ({ results, error, loading }) => (
    <Container>
        {loading ? (
            <Loader />
        ) : (
            results.map((result, idx) => (
                <Coins
                    key={result.name + idx}
                    name={result.name}
                    symbol={result.symbol}
                    rank={result.rank}
                />
            ))
        )}
    </Container>
);

CoinsPresenter.propTypes = {
    results: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            symbol: PropTypes.string,
            rank: PropTypes.number,
        })
    ),
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
};

export default CoinsPresenter;
