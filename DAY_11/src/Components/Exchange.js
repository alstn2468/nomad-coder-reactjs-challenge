import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled("div")`
  margin-bottom: 50px;
`;

const Name = styled("a")`
  font-weight: 600;
  display: block;
  margin-bottom: 10px;
`;

const Links = styled("div")`
  margin-top: 15px;
`;

const Link = styled("a")`
  text-decoration: underline;
`;

const Exchange = ({ name, description, links }) => (
  <Container>
    <Name>{name}</Name>
    {description && `${description.substring(0, 80)}...`}
    <Links>
      {links.website &&
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
    website: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  }).isRequired
};

export default Exchange;
