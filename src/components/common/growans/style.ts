import styled, { keyframes } from "styled-components";

// Constants
export const darkColor = "#777777";

// Animations
export const flowerGFrontAns = keyframes`
  0%, 100% {
    transform: rotate(-28deg) rotateY(30deg) scale(1.04);
  }
  50% {
    transform: rotate(-35deg) rotateY(40deg) scale(1.04);
  }
`;
export const flowerGFrLeafAns1 = keyframes`
  0% {
    transform-origin: left;
    transform: rotate(45deg) scale(0);
  }
`;

export const flowerGFrLeafAns5 = keyframes`
  0% {
    transform-origin: left;
    transform: rotate(55deg) scale(0);
  }
`;

export const flowerGFrLeafAns6 = keyframes`
  0% {
    transform-origin: right;
    transform: rotate(25deg) rotateY(-180deg) scale(0);
  }
`;

export const flowerGFrLeafAns7 = keyframes`
  0% {
    transform-origin: left;
    transform: rotate(45deg) scale(0);
  }
`;

export const flowerGFrLeafAns8 = keyframes`
  0% {
    transform-origin: right;
    transform: rotate(15deg) rotateY(-180deg) scale(0);
  }
`;
export const flowerGFrAns = keyframes`
  0%, 100% {
    transform: rotate(2deg);
  }
  50% {
    transform: rotate(4deg);
  }
`;

export const flowerGFrontLeafLeftAns = keyframes`
  0% {
    transform: rotateY(-180deg) rotate(5deg) scale(0);
  }
`;

export const flowerGFrontLeafLeftAns2 = keyframes`
  0% {
    transform: rotateY(-180deg) scale(0);
  }
`;
export const flowerGFrontLeafAns = keyframes`
  0% {
    transform: rotate(10deg) scale(0);
  }
`;
export const growAns = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
`;
export const flowerGRightAns2 = keyframes`
  0%, 100% {
    transform: rotateY(-180deg) rotate(0deg) rotateX(-20deg);
  }
  50% {
    transform: rotateY(-180deg) rotate(6deg) rotateX(-20deg);
  }
`;

export const GrowAns = styled.div`
  animation: ${growAns} 2s var(--d) backwards;
`;
export const flowerGRightAns = keyframes`
  0%, 100% {
    transform: rotate(20deg);
  }
  50% {
    transform: rotate(24deg) rotateX(-20deg);
  }
`;

// Styles

export const FlowerGRight = styled.div`
  position: absolute;
  bottom: 6vmin;
  left: -2vmin;
  transform-origin: bottom left;
  transform: rotate(20deg);

  &--1 {
    animation: ${flowerGRightAns} 2.5s linear infinite;
  }

  &--2 {
    left: 5vmin;
    transform: rotateY(-180deg);
    animation: ${flowerGRightAns2} 3s linear infinite;
  }
`;
export const GRightLeaf = styled.div`
  width: 30vmin;
  height: 50vmin;
  border-top-left-radius: 100%;
  border-left: 2vmin solid #ff4375;
  background-image: linear-gradient(to bottom, transparent, ${darkColor} 60%);
  mask-image: linear-gradient(to top, transparent 30%, #ff4375 60%);

  .flower__g-right--2 & {
    height: 75vmin;
    filter: blur(0.3vmin);
    opacity: 0.8;
  }
`;
export const FlowerGFront = styled.div`
  position: absolute;
  bottom: 6vmin;
  left: 2.5vmin;
  z-index: 100;
  transform-origin: bottom center;
  transform: rotate(-28deg) rotateY(30deg) scale(1.04);
  animation: ${flowerGFrontAns} 2s linear infinite;
`;

export const FlowerGFrontLine = styled.div`
  width: 0.3vmin;
  height: 20vmin;
  background-image: linear-gradient(
    to top,
    transparent,
    #FF4375,
    transparent 100%
  );
  position: relative;
`;

export const FlowerGFrontLeafWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: bottom left;
  transform: rotate(10deg);

  &:nth-child(even) {
    left: 0vmin;
    transform: rotateY(-180deg) rotate(5deg);
    animation: ${flowerGFrontLeafLeftAns} 1s ease-in backwards;
  }

  &:nth-child(odd) {
    animation: ${flowerGFrontLeafAns} 1s ease-in backwards;
  }

  &--1 {
    top: -8vmin;
    transform: scale(0.7);
    animation: ${flowerGFrontLeafAns} 1s 5.5s ease-in backwards !important;
  }

  &--2 {
    top: -8vmin;
    transform: rotateY(-180deg) scale(0.7) !important;
    animation: ${flowerGFrontLeafLeftAns2} 1s 4.6s ease-in backwards !important;
  }

  &--3 {
    top: -3vmin;
    animation: ${flowerGFrontLeafAns} 1s 4.6s ease-in backwards;
  }

  &--4 {
    top: -3vmin;
    transform: rotateY(-180deg) scale(0.9) !important;
    animation: ${flowerGFrontLeafLeftAns2} 1s 4.6s ease-in backwards !important;
  }

  &--5,
  &--6 {
    top: 2vmin;
  }

  &--7,
  &--8 {
    top: 6.5vmin;
  }

  &--2 {
    animation-delay: 5.2s !important;
  }

  &--3 {
    animation-delay: 4.9s !important;
  }

  &--5 {
    animation-delay: 4.3s !important;
  }

  &--6 {
    animation-delay: 4.1s !important;
  }

  &--7 {
    animation-delay: 3.8s !important;
  }

  &--8 {
    animation-delay: 3.5s !important;
  }
`;
export const FlowerGFrontLeaf = styled.div`
  width: 10vmin;
  height: 10vmin;
  border-radius: 100% 0% 0% 100% / 100% 100% 0% 0%;
  box-shadow: inset 0 2px 1vmin #ff4375;
  background-image: linear-gradient(to bottom left, transparent, ${darkColor}),
    linear-gradient(to bottom right, #ff4375 50%, transparent 50%, transparent);

  mask-image: linear-gradient(
    to bottom right,
    #ff4375 50%,
    transparent 50%,
    transparent
  );
  mask-image: linear-gradient(
    to bottom right,
    #ff4375 50%,
    transparent 50%,
    transparent
  );
`;
export const FlowerGFr = styled.div`
  position: absolute;
  bottom: -4vmin;
  left: vmin;
  transform-origin: bottom left;
  z-index: 10;
  animation: ${flowerGFrAns} 2s linear infinite;
`;
export const GFrLeaf = styled.div`
  width: 30vmin;
  height: 50vmin;
  border-top-left-radius: 100%;
  border-left: 2vmin solid #FF4375;
  mask-image: linear-gradient(to top, transparent 25%, #FF4375 50%);
  position: relative;
  z-index: 1;
`;
export const FlowerGFrLeafStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 10vmin;
  height: 10vmin;
  border-radius: 100% 0% 0% 100% / 100% 100% 0% 0%;
  box-shadow: inset 0 2px 1vmin hsla(184, 97%, 58%, 0.2);
  background-image: linear-gradient(
      to bottom left,
      transparent,
      ${darkColor} 98%
    ),
    linear-gradient(to bottom right, #ff4375 45%, transparent 50%, transparent);

  mask-image: linear-gradient(
    135deg,
    #ff4375 40%,
    transparent 50%,
    transparent
  );

  &--1 {
    left: 20vmin;
    transform: rotate(45deg);
    animation: ${flowerGFrLeafAns1} 0.5s 5.2s linear backwards;
  }

  &--2 {
    left: 12vmin;
    top: -7vmin;
    transform: rotate(25deg) rotateY(-180deg);
    animation: ${flowerGFrLeafAns6} 0.5s 5s linear backwards;
  }

  &--3 {
    left: 15vmin;
    top: 6vmin;
    transform: rotate(55deg);
    animation: ${flowerGFrLeafAns5} 0.5s 4.8s linear backwards;
  }

  &--4 {
    left: 6vmin;
    top: -2vmin;
    transform: rotate(25deg) rotateY(-180deg);
    animation: ${flowerGFrLeafAns6} 0.5s 4.6s linear backwards;
  }

  &--5 {
    left: 10vmin;
    top: 14vmin;
    transform: rotate(55deg);
    animation: ${flowerGFrLeafAns5} 0.5s 4.4s linear backwards;
  }

  &--6 {
    left: 0vmin;
    top: 6vmin;
    transform: rotate(25deg) rotateY(-180deg);
    animation: ${flowerGFrLeafAns6} 0.5s 4.2s linear backwards;
  }

  &--7 {
    left: 5vmin;
    top: 22vmin;
    transform: rotate(45deg);
    animation: ${flowerGFrLeafAns7} 0.5s 4s linear backwards;
  }

  &--8 {
    left: -4vmin;
    top: 15vmin;
    transform: rotate(15deg) rotateY(-180deg);
    animation: ${flowerGFrLeafAns8} 0.5s 3.8s linear backwards;
  }
`;
