import React from "react";
import PropTypes from "prop-types";
import Market from "../../Components/Market";
import Loader from "../../Components/Loader";

const CoinDetailMarketsPresenter = ({ loading, markets }) => {
    return loading ? (
        <Loader />
    ) : (
        markets.map(market => (
            <Market name={market.exchange_name} key={market.id} />
        ))
    );
};

CoinDetailMarketsPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    markets: PropTypes.arrayOf(
        PropTypes.shape({
            exchange_name: PropTypes.string.isRequired
        })
    ).isRequired
};

export default CoinDetailMarketsPresenter;
