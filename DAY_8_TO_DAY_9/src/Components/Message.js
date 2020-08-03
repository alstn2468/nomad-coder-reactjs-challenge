import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const MessageContainer = styled.div``;

const MessageText = styled.p`
    font-size: 14px;
    color: ${props => (props.color ? props.color : "#000000")};
`;

const Message = ({ message, color }) => (
    <MessageContainer>
        <MessageText color={color}>{message}</MessageText>
    </MessageContainer>
);

Message.propTypes = {
    message: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

export default Message;
