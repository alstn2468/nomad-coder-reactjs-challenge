import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Coins from "../../Components/Coins";
import Message from "../../Components/Message";

const Container = styled.div``;

const CoinsPresenter = ({ results, error, loading }) => (
    <Container>
        {loading ? (
            <Loader />
        ) : error ? (
            <Message message={error} color="red" />
        ) : (
            results.map(result => <Coins key={result.id} {...result} />)
        )}
    </Container>
);

CoinsPresenter.propTypes = {
    results: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            symbol: PropTypes.string.isRequired,
            rank: PropTypes.number.isRequired
        })
    ),
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
};

export default CoinsPresenter;
