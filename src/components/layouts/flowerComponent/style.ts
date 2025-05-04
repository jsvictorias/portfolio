import styled from "styled-components";
import {
  flowerGLongAns,
  growAns,
  growingGrassAns,
  movingFlower1,
  movingFlower2,
  movingFlower3,
} from "./animations";

export const GlobalStyle = styled.div`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    min-height: 100vh;
    overflow: hidden;
    perspective: 1000px;
    padding: 50px 0px;
  }

  .not-loaded * {
    animation-play-state: paused !important;
  }
`;
export const Night = styled.div`
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  filter: blur(0.1vmin);
`;

export const Flowers = styled.div`
  position: relative;
  transform: scale(0.9);
`;

export const Flower = styled.div`
  position: absolute;
  bottom: 10vmin;
  transform-origin: bottom center;
  z-index: 10;
  --fl-speed: 0.8s;

  &--1 {
    animation: ${movingFlower1} 4s linear infinite;
  }

  &--2 {
    left: 50%;
    transform: rotate(20deg);
    animation: ${movingFlower2} 4s linear infinite;
  }

  &--3 {
    left: 50%;
    transform: rotate(-15deg);
    animation: ${movingFlower3} 4s linear infinite;
  }
`;

export const GrowingGrass = styled.div`
  animation: ${growingGrassAns} 1s 2s backwards;
`;

export const GrowAns = styled.div`
  animation: ${growAns} 2s var(--d) backwards;
`;

export const FlowerGLong = styled.div`
  --w: 2vmin;
  --h: 6vmin;
  --c: #FF4375;
  position: absolute;
  bottom: 10vmin;
  left: -3vmin;
  transform-origin: bottom center;
  transform: rotate(-30deg) rotateY(-20deg);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  animation: ${flowerGLongAns} 3s linear infinite;
`;

export const FlowerGLongTop = styled.div`
  top: calc(var(--h) * -1);
  width: calc(var(--w) + 1vmin);
  height: var(--h);
  border-top-right-radius: 100%;
  border-right: 0.7vmin solid var(--c);
  transform: translate(-0.7vmin, 1vmin);
`;

export const FlowerGLongBottom = styled.div`
  width: var(--w);
  height: 50vmin;
  transform-origin: bottom center;
  background-image: linear-gradient(to top, transparent 30%, var(--c));
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
  clip-path: polygon(35% 0, 65% 1%, 100% 100%, 0% 100%);
`;
