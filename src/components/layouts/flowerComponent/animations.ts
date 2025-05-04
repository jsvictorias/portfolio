import styled, { keyframes } from "styled-components";

export const movingFlower1 = keyframes`
  0%, 100% {
    transform: rotate(2deg);
  }
  50% {
    transform: rotate(-2deg);
  }
`;

export const movingFlower2 = keyframes`
  0%, 100% {
    transform: rotate(18deg);
  }
  50% {
    transform: rotate(14deg);
  }
`;

export const movingFlower3 = keyframes`
  0%, 100% {
    transform: rotate(-18deg);
  }
  50% {
    transform: rotate(-20deg) rotateY(-10deg);
  }
`;

export const growingGrassAns = keyframes`
  0% {
    transform: scale(0);
  }
`;

export const growAns = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
`;

export const flowerGLongAns = keyframes`
  0%, 100% {
    transform: rotate(-30deg) rotateY(-20deg);
  }
  50% {
    transform: rotate(-32deg) rotateY(-20deg);
  }
`;