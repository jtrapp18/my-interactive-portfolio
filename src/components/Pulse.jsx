import styled, { keyframes } from 'styled-components';

const outerPulse = keyframes`
  0%, 100% { transform: rotate(0deg)  scale(1);    opacity: 1; }
  50%       { transform: rotate(0deg)  scale(0.48); opacity: 0.25; }
`;

const innerPulse = keyframes`
  0%, 100% { transform: rotate(30deg) scale(0.48); opacity: 0.25; }
  50%       { transform: rotate(30deg) scale(1);    opacity: 1; }
`;

const VARIANTS = {
    a:    { outer: '#C8390A', inner: '#E8A020' }, // blood orange + yellow
    b:    { outer: '#D4580A', inner: '#F0C040' }, // deep orange + gold
    c:    { outer: '#2d4a1e', inner: '#C8940A' }, // forest green + amber
    gray: { outer: '#888880', inner: '#b8b8b0' }, // neutral gray
};

const SIZES = {
    sm: 56,
    md: 100,
    lg: 148,
};

const OrbSvg = styled.svg`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    display: block;
`;

const Star = styled.polygon`
    fill: none;
    stroke: ${({ $color }) => $color};
    stroke-width: 1.6;
    stroke-linejoin: round;
    transform-origin: 50% 50%;
    animation: ${({ $phase }) => $phase === 'outer' ? outerPulse : innerPulse}
               2.8s ease-in-out infinite;
    animation-delay: ${({ $delay }) => $delay}s;
`;

const POINTS = "36,4 41,27 60,18 47,36 60,54 41,45 36,68 31,45 12,54 25,36 12,18 31,27";

const Pulse = ({
    size = 'md',
    variant = 'a',
    delay = 0,
}) => {
    const px = SIZES[size] ?? SIZES.md;
    const colors = VARIANTS[variant] ?? VARIANTS.a;

    return (
        <OrbSvg $size={px} viewBox="0 0 72 72">
            <Star $phase="outer" $color={colors.outer} $delay={delay} points={POINTS} />
            <Star $phase="inner" $color={colors.inner} $delay={delay} points={POINTS} />
        </OrbSvg>
    );
};

export default Pulse;