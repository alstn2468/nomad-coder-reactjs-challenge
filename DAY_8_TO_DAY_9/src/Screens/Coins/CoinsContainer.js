import React from "react";
import CoinsPresenter from "./CoinsPresenter";
import { coinsApi } from "../../api";

export default class extends React.Component {
    state = {
        results: [],
        error: null,
        loading: true,
    };

    sortJSON(data, key) {
        return data.sort((a, b) => {
            let x = a[key];
            let y = b[key];
            return x < y ? -1 : x > y ? 1 : 0;
        });
    }

    getCoins = async () => {
        try {
            const { data: results } = await coinsApi.getCoins();
            this.setState({
                results,
            });
        } catch (e) {
            console.log(e);
        } finally {
            this.setState({ loading: false });
        }
    };

    componentDidMount() {
        this.getCoins();
    }

    render() {
        return <CoinsPresenter {...this.state} />;
    }
}
