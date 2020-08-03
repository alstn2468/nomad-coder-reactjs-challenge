import React from "react";
import ExchangesPresenter from "./ExchangesPresenter";
import { exchangesApi } from "../../api";

export default class extends React.Component {
    state = {
        results: [],
        error: null,
        loading: true,
    };

    getExchanges = async () => {
        try {
            const { data: results } = await exchangesApi.getExchanges();
            this.setState({ results });
        } catch (e) {
            console.log(e);
        } finally {
            this.setState({ loading: false });
        }
    };

    componentDidMount() {
        this.getExchanges();
    }

    render() {
        return <ExchangesPresenter {...this.state} />;
    }
}
