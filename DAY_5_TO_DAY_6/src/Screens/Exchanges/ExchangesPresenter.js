import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Exchange from "../../Components/Exchange";

const Container = styled.div``;

const ExchangesPresenter = ({ results, error, loading }) => (
    <Container>
        {loading ? (
            <Loader />
        ) : (
            results.map((result, idx) => (
                <Exchange
                    key={result.name + idx}
                    name={result.name}
                    description={result.description}
                    website={result.links ? result.links.website : "No website"}
                />
            ))
        )}
    </Container>
);

ExchangesPresenter.propTypes = {
    results: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            description: PropTypes.string,
            website: PropTypes.string,
        })
    ),
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
};

export default ExchangesPresenter;
