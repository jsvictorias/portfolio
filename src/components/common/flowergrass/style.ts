import styled, { keyframes } from "styled-components";

// Animations

export const growingGrassAns1 = keyframes`
  0% {
    transform-origin: bottom left;
    transform: rotate(-20deg) scale(0);
  }
`;
export const growingGrassAns2 = keyframes`
  0% {
    transform-origin: bottom right;
    transform: rotate(10deg) scale(0);
  }
`;

export const growingGrassAns3 = keyframes`
  0% {
    transform-origin: bottom left;
    transform: rotate(-18deg) rotateX(-20deg) scale(0);
  }
`;

export const growingGrassAns4 = keyframes`
  0% {
    transform-origin: bottom right;
    transform: rotate(2deg) scale(0);
  }
`;

export const growingGrassAns5 = keyframes`
  0% {
    transform-origin: bottom left;
    transform: rotate(-24deg) rotateX(-20deg) scale(0);
  }
`;

export const growingGrassAns6 = keyframes`
  0% {
    transform-origin: bottom right;
    transform: rotate(10deg) scale(0);
  }
`;

export const growingGrassAns7 = keyframes`
  0% {
    transform-origin: bottom left;
    transform: rotate(-10deg) scale(0);
  }
`;

export const growingGrassAns8 = keyframes`
  0% {
    transform-origin: bottom right;
    transform: rotate(10deg) scale(0);
  }
`;

export const movingGrass2 = keyframes`
  0%, 100% {
    transform: scale(0.5) rotate(75deg) rotateX(10deg) rotateY(-200deg);
  }
  50% {
    transform: scale(0.5) rotate(79deg) rotateX(10deg) rotateY(-200deg);
  }
`;
export const movingGrass = keyframes`
  0%, 100% {
    transform: rotate(-48deg) rotateY(40deg);
  }
  50% {
    transform: rotate(-50deg) rotateY(40deg);
  }
`;

// Styles

export const FlowerGrass = styled.div`
  --c: #ff4375;
  --line-w: 1.5vmin;

  position: absolute;
  bottom: 12vmin;
  left: -7vmin;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 20;
  transform-origin: bottom center;
  transform: rotate(-48deg) rotateY(40deg);

  &--1 {
    animation: ${movingGrass} 2s linear infinite;
  }

  &--2 {
    left: 2vmin;
    bottom: 10vmin;
    transform: scale(0.5) rotate(75deg) rotateX(10deg) rotateY(-200deg);
    opacity: 0.8;
    z-index: 0;
    animation: ${movingGrass2} 1.5s linear infinite;
  }
`;
export const FlowerGrassTop = styled.div`
  width: 7vmin;
  height: 10vmin;
  border-top-right-radius: 100%;
  border-right: var(--line-w) solid var(--c);
  transform-origin: bottom center;
  transform: rotate(-2deg);
`;
export const FlowerGrassBottom = styled.div`
  margin-top: -2px;
  width: var(--line-w);
  height: 25vmin;
  background-image: linear-gradient(to top, transparent, var(--c));
`;
export const FlowerGrassLeaf = styled.div`
  --size: 10vmin;
  position: absolute;
  width: calc(var(--size) * 2.1);
  height: var(--size);
  border-top-left-radius: var(--size);
  border-top-right-radius: var(--size);
  background-image: linear-gradient(
    to top,
    transparent,
    transparent 30%,
    var(--c)
  );
  z-index: 100;

  &--1 {
    top: -6%;
    left: 30%;
    --size: 6vmin;
    transform: rotate(-20deg);
    animation: ${growingGrassAns1} 2s 2.6s backwards;
  }

  &--2 {
    top: -5%;
    left: -110%;
    --size: 6vmin;
    transform: rotate(10deg);
    animation: ${growingGrassAns2} 2s 2.4s linear backwards;
  }

  &--3 {
    top: 5%;
    left: 60%;
    --size: 8vmin;
    transform: rotate(-18deg) rotateX(-20deg);
    animation: ${growingGrassAns3} 2s 2.2s linear backwards;
  }

  &--4 {
    top: 6%;
    left: -135%;
    --size: 8vmin;
    transform: rotate(2deg);
    animation: ${growingGrassAns4} 2s 2s linear backwards;
  }

  &--5 {
    top: 20%;
    left: 60%;
    --size: 10vmin;
    transform: rotate(-24deg) rotateX(-20deg);
    animation: ${growingGrassAns5} 2s 1.8s linear backwards;
  }

  &--6 {
    top: 22%;
    left: -180%;
    --size: 10vmin;
    transform: rotate(10deg);
    animation: ${growingGrassAns6} 2s 1.6s linear backwards;
  }

  &--7 {
    top: 39%;
    left: 70%;
    --size: 10vmin;
    transform: rotate(-10deg);
    animation: ${growingGrassAns7} 2s 1.4s linear backwards;
  }

  &--8 {
    top: 40%;
    left: -215%;
    --size: 11vmin;
    transform: rotate(10deg);
    animation: ${growingGrassAns8} 2s 1.2s linear backwards;
  }
`;
export const FlowerGrassOverlay = styled.div`
  position: absolute;
  top: -10%;
  right: 0%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  filter: blur(1.5vmin);
  z-index: 100;
`;
