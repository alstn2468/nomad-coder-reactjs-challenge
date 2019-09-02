import React from "react";
import ExchangesPresenter from "./ExchangesPresenter";
import { exchangesApi } from "../../api";

export default class extends React.Component {
    state = {
        results: null,
        error: null,
        loading: true
    };

    async componentDidMount() {
        let results, error;
        try {
            ({ data: results } = await exchangesApi.getExchanges());
        } catch {
            error = "Can't get exchange results.";
        } finally {
            this.setState({ results, error, loading: false });
        }
    }

    render() {
        const { results, error, loading } = this.state;

        return (
            <ExchangesPresenter
                results={results}
                error={error}
                loading={loading}
            />
        );
    }
}
