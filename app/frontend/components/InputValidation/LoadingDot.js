/**
 * LoadingDot
 */

import styled, { keyframes } from 'styled-components';

function loadState() {
  return keyframes`
    0% { opacity: 0; }
    50% { opacity: 1; }
    60% { opacity: 1; }
    100% { opacity: 0; }
  `;
}

const LoadingDot = styled.div`
  animation: ${loadState()} 1s linear infinite;
  color: #ccc;
  display: inline;
  margin: 0.5em 0.2em;
  position: relative;
  font-size: 10px;
  opacity: 0;

  &.one {
    animation-delay: 0.2s;
  }
  &.two {
    animation-delay: 0.4s;
  }
  &.three {
    animation-delay: 0.6s;
  }
`;

export default LoadingDot;
