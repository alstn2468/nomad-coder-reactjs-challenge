import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
    width: 100%;
`;

const SubTitle = styled.p`
    font-size: 24px;
    font-weight: 500;
    margin: 10px 0px;
`;

const CoinInfoContainer = styled.div`
    width: 40%;
    font-size: 35px;
    font-weight: 600;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 2px solid black;
`;

const InfoContainer = styled.div`
    width: 40%;
    margin-bottom: 20px;
`;

const RankTitle = styled.div`
    display: inline-flex;
    font-size: 24px;
    font-weight: 500;
    margin: 10px 4px 10px 0px;
`;

const RankText = styled.p`
    display: inline-flex;
    font-size: 25px;
`;

const Message = ({
    name,
    description,
    open_source,
    org_structure,
    proof_type,
    rank,
    symbol,
}) => (
    <Container>
        <CoinInfoContainer>
            {name} / {symbol}
        </CoinInfoContainer>

        <RankTitle>Rank</RankTitle>
        <RankText>
            {rank === 1 ? (
                <span role="img" aria-label="First">
                    🥇
                </span>
            ) : rank === 2 ? (
                <span role="img" aria-label="Second">
                    🥈
                </span>
            ) : rank === 3 ? (
                <span role="img" aria-label="Third">
                    🥉
                </span>
            ) : (
                rank
            )}
        </RankText>

        <InfoContainer>
            <SubTitle>Description</SubTitle>
            {description}
        </InfoContainer>

        <InfoContainer>
            <SubTitle>Open Source</SubTitle>
            {open_source ? "Yes" : "No"}
        </InfoContainer>

        <InfoContainer>
            <SubTitle>Org Structure</SubTitle>
            {org_structure}
        </InfoContainer>

        <InfoContainer>
            <SubTitle>Proof Type</SubTitle>
            {proof_type}
        </InfoContainer>
    </Container>
);

Message.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    open_source: PropTypes.bool,
    org_structure: PropTypes.string,
    proof_type: PropTypes.string,
    rank: PropTypes.number,
    symbol: PropTypes.string,
};

export default Message;
