import React from "react";
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import Header from "../Components/Header";
import Coins from "../Screens/Coins";
import Exchanges from "../Screens/Exchanges";
import Prices from "../Screens/Prices";

export default () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Coins} />
                <Route path="/exchanges" component={Exchanges} />
                <Route path="/prices" component={Prices} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    );
};
