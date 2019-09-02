import React from "react";
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";
import Header from "./Header";
import Coins from "../Screens/Coins";
import Exchanges from "../Screens/Exchanges";
import Prices from "../Screens/Prices";
import CoinDetail from "../Screens/CoinDetail";

export default () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Prices} />
                <Route path="/exchanges" component={Exchanges} />
                <Route path="/coins" exact component={Coins} />
                <Route path="/detail/:id" component={CoinDetail} />
                <Route path="/detail/:id/exchanges" component={CoinDetail} />
                <Route path="/detail/:id/markets" component={CoinDetail} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    );
};
