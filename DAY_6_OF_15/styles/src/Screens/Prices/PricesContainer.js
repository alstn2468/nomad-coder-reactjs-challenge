import React from "react";
import PricesPresenter from "./PricesPresenter";
import { pricesApi } from "../../api";

export default class extends React.Component {
    state = {
        results: null,
        error: null,
        loading: true
    };

    async componentDidMount() {
        let results, error;
        try {
            ({ data: results } = await pricesApi.getPrices());
        } catch {
            error = "Can't get price results.";
        } finally {
            this.setState({ results, error, loading: false });
        }
    }

    render() {
        const { results, error, loading } = this.state;

        return (
            <PricesPresenter
                results={results}
                error={error}
                loading={loading}
            />
        );
    }
}
