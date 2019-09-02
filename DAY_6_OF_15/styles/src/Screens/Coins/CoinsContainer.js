import React from "react";
import CoinsPresenter from "./CoinsPresenter";
import { coinsApi } from "../../api";

export default class extends React.Component {
    state = {
        results: [],
        error: null,
        loading: true
    };

    sortJSON(data, key) {
        return data.sort((a, b) => {
            let x = a[key];
            let y = b[key];
            return x < y ? -1 : x > y ? 1 : 0;
        });
    }

    async componentDidMount() {
        let results, error;
        try {
            ({ data: results } = await coinsApi.getCoins());
            results = this.sortJSON(
                results.filter(result => result.rank !== 0),
                "rank"
            );
        } catch {
            error = "Can't get Coin results.";
        } finally {
            this.setState({ results, error, loading: false });
        }
    }

    render() {
        const { results, error, loading } = this.state;

        return (
            <CoinsPresenter results={results} error={error} loading={loading} />
        );
    }
}
