import styled, { keyframes } from "styled-components";

// Constants
export const darkColor = "#000";

// Animations
export const growAns = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
`;
export const leafAns1 = keyframes`
  0%, 100% {
    transform: rotate(-5deg) scale(1);
  }
  50% {
    transform: rotate(5deg) scale(1.1);
  }
`;

export const leafAns2 = keyframes`
  0%, 100% {
    transform: rotateY(-180deg) rotate(5deg);
  }
  50% {
    transform: rotateY(-180deg) rotate(0deg) scale(1.1);
  }
`;

export const leafAns3 = keyframes`
  0%, 100% {
    transform: rotate(-10deg) rotateY(-180deg);
  }
  50% {
    transform: rotate(-20deg) rotateY(-180deg);
  }
`;

// Styles
export const LongG = styled.div`
  position: absolute;
  bottom: 25vmin;
  left: -42vmin;
  transform-origin: bottom left;

  &--1 {
    bottom: 0vmin;
    transform: scale(0.8) rotate(-5deg);
  }

  &--2,
  &--3 {
    bottom: -3vmin;
    left: -35vmin;
    transform-origin: center;
    transform: scale(0.6) rotateX(60deg);
  }

  &--3 {
    left: -17vmin;
    bottom: 0vmin;
  }

  &--4 {
    left: 25vmin;
    bottom: -3vmin;
    transform-origin: center;
    transform: scale(0.6) rotateX(60deg);
  }

  &--5 {
    left: 42vmin;
    bottom: 0vmin;
    transform: scale(0.8) rotate(2deg);
  }

  &--6 {
    left: 0vmin;
    bottom: -20vmin;
    z-index: 100;
    filter: blur(0.3vmin);
    transform: scale(0.8) rotate(2deg);
  }

  &--7 {
    left: 35vmin;
    bottom: 20vmin;
    z-index: -1;
    filter: blur(0.3vmin);
    transform: scale(0.6) rotate(2deg);
    opacity: 0.7;
  }
`;
export const GrowAns = styled.div`
  animation: ${growAns} 2s var(--d) backwards;
`;
export const Leaf = styled.div`
  --w: 15vmin;
  --h: 40vmin;
  --c: #1aaa15;

  position: absolute;
  bottom: 0;
  width: var(--w);
  height: var(--h);
  border-top-left-radius: 100%;
  border-left: 2vmin solid var(--c);
  mask-image: linear-gradient(to top, transparent 20%, ${darkColor});
  transform-origin: bottom center;

  &--0 {
    left: 2vmin;
    animation: ${leafAns1} 4s linear infinite;
  }

  &--1 {
    --w: 5vmin;
    --h: 60vmin;
    animation: ${leafAns1} 4s linear infinite;
  }

  &--2 {
    --w: 10vmin;
    --h: 40vmin;
    left: -0.5vmin;
    bottom: 5vmin;
    transform-origin: bottom left;
    transform: rotateY(-180deg);
    animation: ${leafAns2} 3s linear infinite;
  }

  &--3 {
    --w: 5vmin;
    --h: 30vmin;
    left: -1vmin;
    bottom: 3.2vmin;
    transform-origin: bottom left;
    transform: rotate(-10deg) rotateY(-180deg);
    animation: ${leafAns3} 3s linear infinite;
  }

  .long-g--1 &,
  .long-g--2 &,
  .long-g--3 &,
  .long-g--4 & {
    mask-image: linear-gradient(
      to top,
      transparent 40%,
      #ff4375 80%
    ) !important;
  }

  .long-g--1 &--1 {
    --w: 5vmin;
    --h: 60vmin;
    left: -2vmin;
    transform: rotate(3deg) rotateY(-180deg);
  }

  .long-g--2 &,
  .long-g--3 & {
    mask-image: linear-gradient(
      to top,
      transparent 50%,
      #ff4375 80%
    ) !important;
  }

  .long-g--2 &--1,
  .long-g--3 &--1 {
    left: -1vmin;
    transform: rotateY(-180deg);
  }

  .long-g--3 & {
    mask-image: linear-gradient(
      to top,
      transparent 40%,
      #ff4375 80%
    ) !important;
  }
`;
