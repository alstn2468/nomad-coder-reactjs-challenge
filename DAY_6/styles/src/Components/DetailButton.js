import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = styled.button`
    width: 120px;
    height: 50px;
    background-color: white;
    border: 2px solid #6200ee;
    color: #6200ee;
    margin-right: 10px;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    :hover {
        background-color: #6200ee;
        color: white;
    }
`;

const DetailButton = ({ name, path }) => (
    <Link to={path}>
        <Button>{name}</Button>
    </Link>
);

DetailButton.propTypes = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

export default DetailButton;
