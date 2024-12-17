import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  position: fixed; /* Sticks it to the bottom of the viewport */
  bottom: 20px; /* Space from the bottom */
  right: 0; /* Center it horizontally */
  display: flex;
  justify-content: center;
  width: 200px;

&.message-bubble {
  z-index: 1;
  display: flex;
  background-color: var(--green); /* Bubble color */
  color: white;
  padding: 10px 0px;
  border-radius: 15px; /* Rounded edges */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 25px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.7);
}

&.message-bubble * {
  width: 100%;
  text-align: center;
  align-content: space-evenly;
}
`

const Messages = () => {
    return (
        <MessageContainer>
        <div className="message-bubble">
          <span>💬Message</span>
        </div>
      </MessageContainer>
    );
}

export default Messages;
