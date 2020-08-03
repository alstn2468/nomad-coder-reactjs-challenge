import React from "react";
import { coinsApi } from "../../api";
import CoinDetailMarketsPresenter from "./CoinDetailMarketsPresenter";

class CoinDetailMarketsContainer extends React.Component {
    state = {
        loading: true,
        markets: []
    };

    getMarkets = async id => {
        try {
            const { data: markets } = await coinsApi.getCoinsMarkets(id);
            this.setState({
                markets
            });
        } catch (e) {
            console.log(e);
        } finally {
            this.setState({ loading: false });
        }
    };

    componentDidMount() {
        const {
            match: {
                params: { id }
            }
        } = this.props;
        this.getMarkets(id);
    }

    render() {
        return <CoinDetailMarketsPresenter {...this.state} />;
    }
}

export default CoinDetailMarketsContainer;
