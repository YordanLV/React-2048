import React, { Component } from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const {media,cell} = theme;

const StyledCell = styled.div`
  display:flex;
  position:relative;
  height: ${cell.size};
  width: ${cell.size};
  border: ${cell.border} solid white;
  align-items: center;
  justify-content: center;
  @media (${media.md}) {
    height: ${cell.sizeSm};
    width: ${cell.sizeSm};
  }
  &:after{
    content: '';
    background: linear-gradient(to bottom, rgba(255,255,255,0.25) 35%,rgba(255,255,255,0) 100%); 
    top:0;
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
  }
  &.neon-2{
    background-color: #ff31f7;
  }
  &.neon-4{
    background-color: #ba37f5;
  }
  &.neon-8{
    background-color: #9239f5;
  }
  &.neon-16{
    background-color: #fe0275;
  }
  &.neon-32{
    background-color: #903592;
  }
  &.neon-64{
    background-color: #6f3460;
  }
  &.neon-128{
    background-color: #49354e;
  }
  &.neon-256{
    background-color: #d10077;
  }
  &.neon-512{
    background-color: #fe0275;
  }
`;

const Num = styled.span`
  color: white;
  font-size:${cell.fontSize};
  @media (${media.md}) {
    font-size:${cell.fontSizeSm};
  }
`;

class Cell extends Component {
  render() { 
    let { val } = this.props
    return ( 
      <StyledCell className={`neon-${val}`}>
        <div>{val ? <Num>{val}</Num> : ''}</div>
      </StyledCell>
    );
  }
}
 
export default Cell;