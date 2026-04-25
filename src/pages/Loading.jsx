import React from 'react';
import styled, { keyframes } from 'styled-components';
import Pulse from '../components/Pulse';

const grain = keyframes`
  0%, 100% { transform: translate(0, 0); }
  10%       { transform: translate(-1%, -1%); }
  20%       { transform: translate(1%, 1%); }
  30%       { transform: translate(-1%, 1%); }
  40%       { transform: translate(1%, -1%); }
  50%       { transform: translate(-1%, 0); }
  60%       { transform: translate(1%, 0); }
  70%       { transform: translate(0, 1%); }
  80%       { transform: translate(0, -1%); }
  90%       { transform: translate(-1%, 1%); }
`;

const StyledMain = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--size-body);
    background-color: #F7F5F0;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        inset: -50%;
        width: 200%;
        height: 200%;
        opacity: 0.035;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        background-repeat: repeat;
        background-size: 128px 128px;
        animation: ${grain} 0.8s steps(1) infinite;
        pointer-events: none;
    }
`;

const Loading = () => {
    return (
        <StyledMain>
            <Pulse size="lg" variant="c" />
        </StyledMain>
    );
}

export default Loading;