import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 80px;
  height: 80px;
  border: 8px solid #ccc;
  border-top: 8px solid #4f46e5;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: 0 auto;
`;

function SpinningSVG() {
  return <Spinner />;
}

export default SpinningSVG;
