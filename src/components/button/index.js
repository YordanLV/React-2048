import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
    font-size: 1.6rem;
    padding: 1rem 2rem;
    border: .3rem solid #ba37f5;
    background-color: rgba(186, 55, 245, .3);
    font-family: 'Orbitron', sans-serif;
    font-weight: 600;
    color: white;
    cursor: pointer;
    &:hover{
      background-color: rgba(186, 55, 245, .9);
    }
`;

const Button = ({ onClick, label }) => (
  <StyledButton onClick={onClick}>{label}</StyledButton>
);

export default Button;