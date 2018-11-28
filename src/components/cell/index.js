import React, { Component } from 'react';
import styled from 'styled-components';

const StyledCell = styled.div`
  display:flex;
  border: 1px solid black;
  height: 10vw;
  width: 10vw;
  align-items: center;
  justify-content: center;
  &.neon-2{
    background-color: red;
  }
  &.neon-4{
    background-color: green;
  }
  &.neon-8{
    background-color: orange;
  }
  &.neon-16{
    background-color: blue;
  }
`;

const Num = styled.span`
  color: white;
  font-size:15px;
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