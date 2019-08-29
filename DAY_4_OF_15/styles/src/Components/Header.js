import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header``;

const Title = styled.h1`
    height: 80px;
    width: 280px;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 26px;
`;

const List = styled.ul`
    display: flex;
    align-items: center;
`;

const Item = styled.li`
    display: inline-block;
    width: auto;
    height: auto;
    margin: 20px 20px;
    color: ${props => (props.current ? "#FFFFFF" : "#000000")};
    background-color: ${props => (props.current ? "#FCBD2D" : "#FFFFFF")};
`;

const SLink = styled(Link)`
    font-size: 14px;
    font-weight: 600;
`;

export default withRouter(({ location: { pathname } }) => (
    <Header>
        <Title>Coin Explorer</Title>
        <List>
            <Item current={pathname === "/"}>
                <SLink to="/">Coins</SLink>
            </Item>
            <Item current={pathname === "/exchanges"}>
                <SLink to="/exchanges">Exchanges</SLink>
            </Item>
            <Item current={pathname === "/prices"}>
                <SLink to="/prices">Prices</SLink>
            </Item>
        </List>
    </Header>
));
