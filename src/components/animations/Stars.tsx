import { useFrame, Canvas } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TextureLoader } from 'three';

const SVG = styled.svg<any>`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: ${({ height }) => `${height}px;`}
  object-fit: cover;
  z-index: -1000;
  transform: ${({ translate, scale }) => `translateZ(${translate}px) scale(${scale});`}
  left: ${({ index }) => `-${index * 8}px;`}
`

const Star = styled.circle<any>`
  fill: white;
  
  

  animation: twinkle var(--twinkle-duration) ease-in-out infinite;

  &:nth-child(3n) {
    opacity: 0.8;
  }
  &:nth-child(7n) {
    opacity: 0.6;
  }
  &:nth-child(13n) {
    opacity: 0.4;
  }
  &:nth-child(19n) {
    opacity: 0.2;
  }

  @keyframes twinkle {
    25% {
      opacity: 0;
    }
  }

`

export default function Stars({ circles, index, height }) {
  const [stars, setStars] = useState([]);
  const windowHeight = window.innerHeight;
  const translate = index * -10;

  const scale = (10 - translate) / 10;

  useEffect(() => {
    const stars = circles.map(({ cx, cy, r }, index) => (
      <Star key={index} cx={cx} cy={cy} r={r} style={{
        animationDelay: `${generateRandomInteger(0, 3)}s`
      }} />
    ))
    setStars(stars)
  }, [circles, height])

  function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1))
  }

  function generateRandomFloat(min, max) {
    return min + Math.random() * (max - min + 1)
  }

  return (
    <SVG height={height} translate={translate} windowHeight={windowHeight} index={index} scale={scale}>
      {stars}
    </SVG>
  );
}
