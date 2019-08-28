import React from "react";
import { Link } from "react-router-dom";

export default () => (
    <header>
        <ul>
            <li>
                <Link to="/">Coins</Link>
            </li>
            <li>
                <Link to="/exchanges">Exchanges</Link>
            </li>
            <li>
                <Link to="/prices">Prices</Link>
            </li>
        </ul>
    </header>
);
