import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Detail from "../../Components/Detail";
import DetailButton from "../../Components/DetailButton";

const Container = styled.div``;

const ButtonContainer = styled.div`
    width: 40%;
    flex-direction: row;
    margin-top: 30px;
`;

const ButtonResultsContainer = styled.div`
    margin-top: 10px;
`;

const CoinDetailPresenter = ({ result, error, loading }) => (
    <Container>
        {loading ? (
            <Loader />
        ) : error ? (
            <Message message={error} color="red" />
        ) : (
            <>
                <Detail {...result} />
                <ButtonContainer>
                    <DetailButton
                        name="MARKETS"
                        path={`/detail/${result.id}/markets`}
                    />
                    <DetailButton
                        name="EXCHANGES"
                        path={`/detail/${result.id}/exchanges`}
                    />
                </ButtonContainer>
                <ButtonResultsContainer />
            </>
        )}
    </Container>
);

CoinDetailPresenter.propTypes = {
    result: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        open_source: PropTypes.bool,
        org_structure: PropTypes.string,
        proof_type: PropTypes.string,
        rank: PropTypes.number,
        symbol: PropTypes.string,
    }),
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
};

export default CoinDetailPresenter;
