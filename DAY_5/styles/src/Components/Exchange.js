import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    width: 400px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 2px solid black;
`;

const Title = styled.h2`
    font-size: 20px;
    font-weight: 500;
`;

const Description = styled.p`
    margin: 20px 0px;
`;

const Website = styled.a`
    pointer-events: ${(props) => props.noWebsite && "none"};
    cursor: ${(props) => (props.noWebsite ? "default" : "pointer")};
    text-decoration: ${(props) => props.noWebsite && "none"};
`;

const Exchange = ({ name, description, website }) => (
    <Container>
        <Title>{name}</Title>
        <Description>
            {description
                ? `${description.substring(0, 86)}...`
                : "No Description"}
        </Description>
        <Website href={website && website} noWebsite={!Boolean(website)}>
            {website ? website : "No Website"}
        </Website>
    </Container>
);

Exchange.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    website: PropTypes.string,
};

export default Exchange;
