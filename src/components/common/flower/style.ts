import { keyframes } from "styled-components";
import styled from "styled-components";

// Animations

export const movingFlower1 = keyframes`
  0%, 100% {
    transform: rotate(2deg);
  }
  50% {
    transform: rotate(-2deg);
  }
`;
export const growFlowerTree = keyframes`
  0% {
    height: 0;
    border-radius: 1vmin;
  }
`;
export const bloomingFlower = keyframes`
  0% {
    transform: scale(0);
  }
`;
export const lightAns = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0vmin);
  }
  25% {
    opacity: 1;
    transform: translateY(-5vmin) translateX(-2vmin);
  }
  50% {
    opacity: 1;
    transform: translateY(-15vmin) translateX(2vmin);
    filter: blur(0.2vmin);
  }
  75% {
    transform: translateY(-20vmin) translateX(-2vmin);
    filter: blur(0.2vmin);
  }
  100% {
    transform: translateY(-30vmin);
    opacity: 0;
    filter: blur(1vmin);
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

export const bloomingLeafRight = keyframes`
  0% {
    transform-origin: left;
    transform: rotate(70deg) rotateY(30deg) scale(0);
  }
`;

export const bloomingLeafLeft = keyframes`
  0% {
    transform-origin: right;
    transform: rotate(-70deg) rotateY(30deg) scale(0);
  }
`;

// Styles

export const Flower = styled.div<{numb: string}>`
  position: absolute;
  bottom: 10vmin;
  transform-origin: bottom center;
  z-index: 10;
  --fl-speed: 0.8s;

  ${({numb}) => {
    switch(numb) {
      case '1':
        return `
          left: 20%;
          animation: ${movingFlower1} 4s linear infinite;
        `;
      case '2':
        return `
          left: 40%;
          transform: rotate(20deg);
          animation: ${movingFlower2} 4s linear infinite;
        `;
      case '3':
        return `
          left: 60%;
          transform: rotate(-15deg);
          animation: ${movingFlower3} 4s linear infinite;
        `;
      case '4':
        return `
          left: 80%;
          transform: rotate(10deg);
          animation: ${movingFlower1} 4s linear infinite;
        `;
      default:
        return '';
    }
  }}
`;

export const FlowerLeafs = styled.div`
  position: relative;
  animation: ${bloomingFlower} 2s backwards;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-50%, -100%);
    width: 8vmin;
    height: 8vmin;
    background-color: #ff4375;
    filter: blur(10vmin);
  }

  &--1 {
    animation-delay: 1.1s;
  }

  &--2 {
    animation-delay: 1.4s;
  }

  &--3 {
    animation-delay: 1.7s;
  }
`;

export const FlowerLeaf = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 8vmin;
  height: 11vmin;
  border-radius: 51% 49% 47% 53% / 44% 45% 55% 69%;
  background-color: #ff4375;
  background-image: linear-gradient(to top, #ff4375, #ff4375);
  transform-origin: bottom center;
  opacity: 0.9;
  box-shadow: inset 0 0 2vmin rgba(255, 255, 255, 0.5);

  &--1 {
    transform: translate(-10%, 1%) rotateY(40deg) rotateX(-50deg);
  }

  &--2 {
    transform: translate(-50%, -4%) rotateX(40deg);
  }

  &--3 {
    transform: translate(-90%, 0%) rotateY(45deg) rotateX(50deg);
  }

  &--4 {
    width: 8vmin;
    height: 8vmin;
    transform-origin: bottom left;
    border-radius: 4vmin 10vmin 4vmin 4vmin;
    transform: translate(-0%, 18%) rotateX(70deg) rotate(-43deg);
    background-image: linear-gradient(to top, #ff4375, #ff4375);
    z-index: 1;
    opacity: 0.8;
  }
`;

export const FlowerWhiteCircle = styled.div`
  position: absolute;
  left: -3.5vmin;
  top: -3vmin;
  width: 9vmin;
  height: 4vmin;
  border-radius: 50%;
  background-color: #fff;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 60%;
    border-radius: inherit;
    background-image: repeating-linear-gradient(
        300deg,
        rgba(0, 0, 0, 0.03) 0px,
        rgba(0, 0, 0, 0.03) 1px,
        transparent 1px,
        transparent 12px
      ),
      repeating-linear-gradient(
        45deg,
        rgba(0, 0, 0, 0.03) 0px,
        rgba(0, 0, 0, 0.03) 1px,
        transparent 1px,
        transparent 12px
      ),
      repeating-linear-gradient(
        67.5deg,
        rgba(0, 0, 0, 0.03) 0px,
        rgba(0, 0, 0, 0.03) 1px,
        transparent 1px,
        transparent 12px
      ),
      repeating-linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.03) 0px,
        rgba(0, 0, 0, 0.03) 1px,
        transparent 1px,
        transparent 12px
      ),
      repeating-linear-gradient(
        45deg,
        rgba(0, 0, 0, 0.03) 0px,
        rgba(0, 0, 0, 0.03) 1px,
        transparent 1px,
        transparent 12px
      ),
      repeating-linear-gradient(
        112.5deg,
        rgba(0, 0, 0, 0.03) 0px,
        rgba(0, 0, 0, 0.03) 1px,
        transparent 1px,
        transparent 12px
      ),
      repeating-linear-gradient(
        112.5deg,
        rgba(0, 0, 0, 0.03) 0px,
        rgba(0, 0, 0, 0.03) 1px,
        transparent 1px,
        transparent 12px
      ),
      repeating-linear-gradient(
        45deg,
        rgba(0, 0, 0, 0.03) 0px,
        rgba(0, 0, 0, 0.03) 1px,
        transparent 1px,
        transparent 12px
      ),
      repeating-linear-gradient(
        22.5deg,
        rgba(0, 0, 0, 0.03) 0px,
        rgba(0, 0, 0, 0.03) 1px,
        transparent 1px,
        transparent 12px
      ),
      repeating-linear-gradient(
        45deg,
        rgba(0, 0, 0, 0.03) 0px,
        rgba(0, 0, 0, 0.03) 1px,
        transparent 1px,
        transparent 12px
      ),
      repeating-linear-gradient(
        22.5deg,
        rgba(0, 0, 0, 0.03) 0px,
        rgba(0, 0, 0, 0.03) 1px,
        transparent 1px,
        transparent 12px
      ),
      repeating-linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.03) 0px,
        rgba(0, 0, 0, 0.03) 1px,
        transparent 1px,
        transparent 12px
      ),
      repeating-linear-gradient(
        157.5deg,
        rgba(0, 0, 0, 0.03) 0px,
        rgba(0, 0, 0, 0.03) 1px,
        transparent 1px,
        transparent 12px
      ),
      repeating-linear-gradient(
        67.5deg,
        rgba(0, 0, 0, 0.03) 0px,
        rgba(0, 0, 0, 0.03) 1px,
        transparent 1px,
        transparent 12px
      ),
      repeating-linear-gradient(
        67.5deg,
        rgba(0, 0, 0, 0.03) 0px,
        rgba(0, 0, 0, 0.03) 1px,
        transparent 1px,
        transparent 12px
      ),
      linear-gradient(90deg, rgb(255, 235, 18), rgb(255, 206, 0));
  }
`;
export const FlowerLight = styled.div`
  position: absolute;
  bottom: 0vmin;
  width: 1vmin;
  height: 1vmin;
  background-color: rgb(255, 251, 0);
  border-radius: 50%;
  filter: blur(0.2vmin);
  animation: ${lightAns} 4s linear infinite backwards;

  &:nth-child(odd) {
    background-color: #ff4375;
  }

  &--1 {
    left: -2vmin;
    animation-delay: 1s;
  }

  &--2 {
    left: 3vmin;
    animation-delay: 0.5s;
  }

  &--3 {
    left: -6vmin;
    animation-delay: 0.3s;
  }

  &--4 {
    left: 6vmin;
    animation-delay: 0.9s;
  }

  &--5 {
    left: -1vmin;
    animation-delay: 1.5s;
  }

  &--6 {
    left: -4vmin;
    animation-delay: 3s;
  }

  &--7 {
    left: 3vmin;
    animation-delay: 2s;
  }

  &--8 {
    left: -6vmin;
    animation-delay: 3.5s;
  }
`;
export const FlowerLine = styled.div`
  height: 55vmin;
  width: 1.5vmin;
  background-image: linear-gradient(
      to left,
      rgb(0, 0, 0, 0.2),
      transparent,
      rgba(255, 255, 255, 0.2)
    ),
    linear-gradient(to top, transparent 10%,rgb(133, 32, 59), #FF4375);
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
  animation: ${growFlowerTree} 4s backwards;

  &--1 {
    height: 70vmin;
    animation-delay: 0.3s;
  }

  &--2 {
    height: 60vmin;
    animation-delay: 0.6s;
  }

  &--3 {
    animation-delay: 0.9s;
  }
`;

export const FlowerLineLeaf = styled.div`
  --w: 7vmin;
  --h: calc(var(--w) + 2vmin);
  position: absolute;
  top: 20%;
  left: 90%;
  width: var(--w);
  height: var(--h);
  border-top-right-radius: var(--h);
  border-bottom-left-radius: var(--h);
  background-image: linear-gradient(to top, rgba(177, 35, 73, 0.68), #ff4375);

  &--1 {
    transform: rotate(70deg) rotateY(30deg);
    animation: ${bloomingLeafRight} var(--fl-speed) 1.6s backwards;
  }

  &--2 {
    top: 45%;
    transform: rotate(70deg) rotateY(30deg);
    animation: ${bloomingLeafRight} var(--fl-speed) 1.4s backwards;
  }

  &--3,
  &--4,
  &--6 {
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    border-top-left-radius: var(--h);
    border-bottom-right-radius: var(--h);
    left: -460%;
    top: 12%;
    transform: rotate(-70deg) rotateY(30deg);
  }

  &--3 {
    animation: ${bloomingLeafLeft} var(--fl-speed) 1.2s backwards;
  }

  &--4 {
    top: 40%;
    animation: ${bloomingLeafLeft} var(--fl-speed) 1s backwards;
  }

  &--5 {
    top: 0;
    transform-origin: left;
    transform: rotate(70deg) rotateY(30deg) scale(0.6);
    animation: ${bloomingLeafRight} var(--fl-speed) 1.8s backwards;
  }

  &--6 {
    top: -2%;
    left: -450%;
    transform-origin: right;
    transform: rotate(-70deg) rotateY(30deg) scale(0.6);
    animation: ${bloomingLeafLeft} var(--fl-speed) 2s backwards;
  }

  &--flower2-1 {
    animation: ${bloomingLeafRight} var(--fl-speed) 1.9s backwards;
  }

  &--flower2-2 {
    animation: ${bloomingLeafRight} var(--fl-speed) 1.7s backwards;
  }

  &--flower2-3 {
    animation: ${bloomingLeafLeft} var(--fl-speed) 1.5s backwards;
  }

  &--flower2-4 {
    animation: ${bloomingLeafLeft} var(--fl-speed) 1.3s backwards;
  }

  &--flower3-1 {
    animation: ${bloomingLeafRight} var(--fl-speed) 2.5s backwards;
  }

  &--flower3-2 {
    animation: ${bloomingLeafRight} var(--fl-speed) 2.3s backwards;
  }

  &--flower3-3 {
    animation: ${bloomingLeafLeft} var(--fl-speed) 2.1s backwards;
  }

  &--flower3-4 {
    animation: ${bloomingLeafLeft} var(--fl-speed) 1.9s backwards;
  }
`;
