import { keyframes } from 'styled-components';

const tiltDeg = 20;

export const FadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, 250%);
  }
  100% {
    opacity: 100%;
    transform: translate(-50%, -50%);
  }
`;

export const TiltUp = keyframes`
  0% {
    transform: RotateX(0deg);
  }
  50% {
    transform: RotateX(${tiltDeg}deg);
  }
  100% {
    transform: RotateX(0deg);
  }
`;

export const TiltRight = keyframes`
  0% {
    transform: RotateY(0deg);
  }
  50% {
    transform: RotateY(${tiltDeg}deg);
  }
  100% {
    transform: RotateY(0deg);
  }
`;

export const TiltDown = keyframes`
  0% {
    transform: RotateX(0deg);
  }
  50% {
    transform: RotateX(-${tiltDeg}deg);
  }
  100% {
    transform: RotateX(0deg);
  }
`;

export const TiltLeft = keyframes`
  0% {
    transform: RotateY(0deg);
  }
  50% {
    transform: RotateY(-${tiltDeg}deg);
  }
  100% {
    transform: RotateY(0deg);
  }
`;