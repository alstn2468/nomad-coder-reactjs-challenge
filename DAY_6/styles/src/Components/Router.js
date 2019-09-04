import React from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./Header";
import Coins from "../Screens/Coins";
import Exchanges from "../Screens/Exchanges";
import Prices from "../Screens/Prices";
import CoinDetail from "../Screens/CoinDetail";
import CoinDetailMarkets from "../Screens/CoinDetailMarkets";
import CoinDetailExchanges from "../Screens/CoinDetailExchanges";

export default () => {
    return (
        <Router>
            <Header />
            <>
                <Route path="/" exact component={Prices} />
                <Route path="/exchanges" component={Exchanges} />
                <Route path="/coins" exact component={Coins} />
                <Route path="/detail/:id" component={CoinDetail} />
                <Route
                    path="/detail/:id/exchanges"
                    component={CoinDetailExchanges}
                />
                <Route
                    path="/detail/:id/markets"
                    component={CoinDetailMarkets}
                />
                <Redirect from="*" to="/" />
            </>
        </Router>
    );
};
