import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    width: 400px;
    font-size: 16px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 2px solid black;
`;

const Medal = styled.div`
    font-size: 20px;
    padding-right: 8px;
`;

const NoMedal = styled.div`
    font-weight: 600;
    padding-right: 5px;
`;

const Content = styled.div`
    font-size: 16px;
    font-weight: ${(props) => (props.rank <= 3 ? 600 : null)};
`;

const Coins = ({ id, rank, symbol, name }) => (
    <Link to={`/detail/${id}`}>
        <Container>
            {rank === 1 ? (
                <Medal>
                    <span role="img" aria-label="First">
                        🥇
                    </span>
                </Medal>
            ) : rank === 2 ? (
                <Medal>
                    <span role="img" aria-label="Second">
                        🥈
                    </span>
                </Medal>
            ) : rank === 3 ? (
                <Medal>
                    <span role="img" aria-label="Third">
                        🥉
                    </span>
                </Medal>
            ) : (
                <NoMedal>#{rank}</NoMedal>
            )}
            <Content rank={rank}>
                {name} / {symbol} →
            </Content>
        </Container>
    </Link>
);

Coins.propTypes = {
    id: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Coins;
