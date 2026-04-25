// AnimatedText.jsx
import styled, { keyframes } from 'styled-components';

const dotFade = keyframes`
  0%, 60%, 100% { opacity: 0; transform: translateY(0); }
  30% { opacity: 1; transform: translateY(-2px); }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1px;
  font-size: inherit;
  font-weight: 300;
  letter-spacing: 0.08em;
  color: gray;
`;

const Dot = styled.span`
  display: inline-block;
  opacity: 0;
  animation: ${dotFade} 1.5s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
`;

const AnimatedText = ({ text = 'Loading' }) => (
  <Wrapper>
    {text}
    <Dot $delay={0}>.</Dot>
    <Dot $delay={0.3}>.</Dot>
    <Dot $delay={0.6}>.</Dot>
  </Wrapper>
);

export default AnimatedText;