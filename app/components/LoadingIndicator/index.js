/**
 *
 * LoadingIndicator
 *
 */
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    `;

const LoadingIndicator = styled.div`
  border: 16px solid #f3f3f3; 
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  margin: auto;
  animation: ${ spin} 1s linear infinite;
  `;

export default LoadingIndicator;
