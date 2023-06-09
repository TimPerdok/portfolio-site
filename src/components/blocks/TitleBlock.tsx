import React from 'react';
import styled from 'styled-components';
import Block from './Block';
import FadeInContainer from '../animations/FadeInContainer';



export default function TitleBlock({ children }) {
  return (
    <Block>
      {
      children.map((child, index) => (
        <FadeInContainer key={index} delay={index * 250}>
          {child}
        </FadeInContainer>
      ))
      }
    </Block>
  )
}

