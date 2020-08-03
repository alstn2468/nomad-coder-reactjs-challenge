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

const Links = styled.div`
    margin-top: 15px;
`;

const Link = styled.a`
    text-decoration: underline;
    display: block;
`;

const Exchange = ({ name, description, links }) => (
    <Container>
        <Title>{name}</Title>
        <Description>
            {description
                ? `${description.substring(0, 80)}...`
                : "No Description"}
        </Description>
        <Links>
            {links &&
                links.website &&
                links.website.map((w, i) => (
                    <Link key={i} href={w}>
                        {w}
                    </Link>
                ))}
        </Links>
    </Container>
);

Exchange.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    links: PropTypes.shape({
        website: PropTypes.arrayOf(PropTypes.string.isRequired),
    }),
};

export default Exchange;
