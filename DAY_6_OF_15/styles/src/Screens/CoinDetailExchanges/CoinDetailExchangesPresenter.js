import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
`;

const Name = styled.span`
    font-size: 16px;
    text-decoration: underline;
    font-weight: 600;
    margin-bottom: 10px;
`;

const Pay = styled.div`
    font-size: 14px;
`;

const CoinDetailExchangesPresenter = ({ loading, exchanges }) => {
    return loading ? (
        <Loader />
    ) : (
        exchanges.map((exchange, idx) => (
            <Container key={idx}>
                {exchange.name && <Name>{exchange.name}</Name>}
                {exchange.fiats && exchange.fiats.length !== 0 && (
                    <Pay>
                        {" "}
                        pay on {exchange.fiats.map(val => `${val.symbol} `)}
                    </Pay>
                )}
            </Container>
        ))
    );
};

CoinDetailExchangesPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    exchanges: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            fiats: PropTypes.arrayOf(
                PropTypes.shape({
                    symbol: PropTypes.string
                })
            )
        })
    )
};

export default CoinDetailExchangesPresenter;
