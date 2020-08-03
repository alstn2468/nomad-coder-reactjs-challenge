import React from "react";
import { coinsApi } from "../../api";
import CoinDetailExchangesPresenter from "./CoinDetailExchangesPresenter";

class CoinDetailExchangesContainer extends React.Component {
    state = {
        loading: true,
        exchanges: [],
    };

    getExchanges = async (id) => {
        try {
            let { data: exchanges } = await coinsApi.getCoinsExchanges(id);
            exchanges = exchanges.filter(
                (exchange) => exchange.fiats.length !== 0
            );
            this.setState({
                exchanges,
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
                params: { id },
            },
        } = this.props;
        this.getExchanges(id);
    }

    render() {
        return <CoinDetailExchangesPresenter {...this.state} />;
    }
}

export default CoinDetailExchangesContainer;
