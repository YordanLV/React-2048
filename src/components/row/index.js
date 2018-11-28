import React, { Component } from 'react';
import styled from 'styled-components';

import Cell from '../cell';

const StyledRow = styled.div`
  display:flex;
  background-color: rgba(0, 0, 0, 0.4); 
`;

class Row extends Component {
  render() { 
    let row = this.props.row;
    return ( 
      <StyledRow>
        {row.map((val, idx) => <Cell key={idx} val={val}/>)}
      </StyledRow>
    );
  }
}
 
export default Row;