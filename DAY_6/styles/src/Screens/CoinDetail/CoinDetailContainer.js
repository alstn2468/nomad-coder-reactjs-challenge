import React from "react";
import CoinDetailPresenter from "./CoinDetailPresenter";
import { coinsApi } from "../../api";

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: [],
            error: null,
            loading: false
        };
    }

    async componentDidMount() {
        const {
            match: {
                params: { id }
            }
        } = this.props;

        let result, error;
        try {
            this.setState({ loading: true });
            ({ data: result } = await coinsApi.getCoinsDetail(id));
        } catch {
            error = "Can't get coin detail";
        } finally {
            this.setState({ result, error, loading: false });
        }
    }

    render() {
        const { result, error, loading, pathname } = this.state;

        return (
            <CoinDetailPresenter
                result={result}
                error={error}
                loading={loading}
                pathname={pathname}
            />
        );
    }
}
