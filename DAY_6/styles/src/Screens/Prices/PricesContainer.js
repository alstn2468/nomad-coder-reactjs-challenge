import React from "react";
import PricesPresenter from "./PricesPresenter";
import { pricesApi } from "../../api";

export default class extends React.Component {
    state = {
        loading: true,
        prices: [],
    };

    componentDidMount() {
        this.getPrices();
    }

    getPrices = async () => {
        try {
            const { data: results } = await pricesApi.getPrices();
            this.setState({
                results,
            });
        } catch (e) {
            console.log(e);
        } finally {
            this.setState({ loading: false });
        }
    };

    render() {
        return <PricesPresenter {...this.state} />;
    }
}
