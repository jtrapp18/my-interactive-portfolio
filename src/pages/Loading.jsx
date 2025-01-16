import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.div`
    font-size: 40px;
    color: gray;
`

const Loading = () => {
    return (
        <StyledMain>
            Loading...
        </StyledMain>
    );
}

export default Loading;
