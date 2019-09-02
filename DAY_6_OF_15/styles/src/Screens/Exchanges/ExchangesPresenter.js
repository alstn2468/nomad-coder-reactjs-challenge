import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Exchange from "../../Components/Exchange";
import Message from "../../Components/Message";

const Container = styled.div``;

const ExchangesPresenter = ({ results, error, loading }) => (
    <Container>
        {loading ? (
            <Loader />
        ) : error ? (
            <Message message={error} color="red" />
        ) : (
            results.map(result => (
                <Exchange
                    name={result.name}
                    description={result.description}
                    website={result.links.website}
                />
            ))
        )}
    </Container>
);

ExchangesPresenter.propTypes = {
    results: PropTypes.objectOf(
        PropTypes.shape({
            name: PropTypes.string,
            description: PropTypes.string,
            website: PropTypes.string
        })
    ),
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
};

export default ExchangesPresenter;
