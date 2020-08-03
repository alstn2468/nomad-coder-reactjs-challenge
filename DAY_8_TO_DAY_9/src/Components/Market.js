import React from "react";
import styled from "styled-components";

const Container = styled.div`
    text-decoration: underline;
    font-size: 16px;
    margin: 5px 0px;
`;

const Market = ({ name }) => <Container>{name}</Container>;

export default Market;
